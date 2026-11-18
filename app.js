// Main Application Controller for WonderSparks News
(function () {
  'use strict';

  // --- STATE ---
  const state = {
    ageLevel: localStorage.getItem('wondersparks_age') || 'curious',
    category: 'all',
    searchQuery: '',
    positiveOnly: false,
    quizOnly: false,
    bookmarks: JSON.parse(localStorage.getItem('wondersparks_bookmarks') || '[]'),
    showChestOnly: false,
    bedtimeMode: localStorage.getItem('wondersparks_bedtime') === 'true',
    activeArticle: null,
    pollVoted: localStorage.getItem('wondersparks_poll_voted') || null,
    pollData: JSON.parse(JSON.stringify(DAILY_POLL)),
    reactions: JSON.parse(localStorage.getItem('wondersparks_reactions') || '{}')
  };

  // --- DOM ELEMENTS ---
  const articlesGrid = document.getElementById('articlesGrid');
  const noResultsState = document.getElementById('noResultsState');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const agePills = document.querySelectorAll('.age-pill');
  const catTabs = document.querySelectorAll('.cat-tab');
  const searchInput = document.getElementById('newsSearchInput');
  const positiveOnlyBtn = document.getElementById('positiveOnlyBtn');
  const quizAvailableBtn = document.getElementById('quizAvailableBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundLabel = document.getElementById('soundLabel');
  const bedtimeToggleBtn = document.getElementById('bedtimeToggleBtn');
  const treasureChestBtn = document.getElementById('treasureChestBtn');
  const chestCount = document.getElementById('chestCount');
  const mascotBounce = document.getElementById('mascotBounce');
  const mascotMessageText = document.getElementById('mascotMessageText');
  const newMascotTipBtn = document.getElementById('newMascotTipBtn');
  const brandHomeBtn = document.getElementById('brandHomeBtn');

  // Sidebar elements
  const pollQuestionText = document.getElementById('pollQuestionText');
  const pollOptionsContainer = document.getElementById('pollOptionsContainer');
  const revealRiddleBtn = document.getElementById('revealRiddleBtn');
  const riddleAnswerBox = document.getElementById('riddleAnswerBox');
  const submitNewsTipBtn = document.getElementById('submitNewsTipBtn');

  // Modal elements
  const articleModalBackdrop = document.getElementById('articleModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHero = document.getElementById('modalHero');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalReadTime = document.getElementById('modalReadTime');
  const modalTitle = document.getElementById('modalTitle');
  const modalAgeCurrentName = document.getElementById('modalAgeCurrentName');
  const modalArticleText = document.getElementById('modalArticleText');
  const modalDidYouKnow = document.getElementById('modalDidYouKnow');
  const modalDidYouKnowText = document.getElementById('modalDidYouKnowText');
  const modalWordDetectiveSection = document.getElementById('modalWordDetectiveSection');
  const modalWordTagsGrid = document.getElementById('modalWordTagsGrid');
  const modalQuizSection = document.getElementById('modalQuizSection');
  const modalQuizQuestionText = document.getElementById('modalQuizQuestionText');
  const modalQuizOptionsList = document.getElementById('modalQuizOptionsList');
  const modalQuizFeedback = document.getElementById('modalQuizFeedback');
  const modalSpeechPlayBtn = document.getElementById('modalSpeechPlayBtn');
  const speechPlayIcon = document.getElementById('speechPlayIcon');
  const speechPlayLabel = document.getElementById('speechPlayLabel');
  const speedBtns = document.querySelectorAll('.speed-btn');
  const printArticleBtn = document.getElementById('printArticleBtn');
  const reactionBtns = document.querySelectorAll('.reaction-btn');

  // Confetti Canvas
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let confettiParticles = [];
  let confettiAnimId = null;

  // --- INITIALIZATION ---
  function init() {
    setupCanvas();
    updateThemeUI();
    updateChestCount();
    renderAgePillState();
    renderPoll();
    renderArticles();
    setupEventListeners();

    // Voice state listener
    if (window.speechReader) {
      window.speechReader.onStateChange = (status) => {
        updateSpeechControls(status);
      };
    }
  }

  // --- CONFETTI SYSTEM ---
  function setupCanvas() {
    if (!canvas) return;
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
  }

  function launchConfetti() {
    if (!canvas || !ctx) return;
    confettiParticles = [];
    const colors = ['#ffd32a', '#ff6b6b', '#2ed573', '#339af0', '#a55eea', '#ff9f43'];
    for (let i = 0; i < 90; i++) {
      confettiParticles.push({
        x: canvas.width / 2 + (Math.random() * 200 - 100),
        y: canvas.height * 0.45,
        r: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        dx: (Math.random() - 0.5) * 12,
        dy: Math.random() * -14 - 4,
        gravity: 0.35,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008
      });
    }

    if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    animateConfetti();
  }

  function animateConfetti() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach(p => {
      p.dy += p.gravity;
      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= p.decay;

      ctx.save();
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    confettiParticles = confettiParticles.filter(p => p.alpha > 0);
    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  // --- THEME & SOUND ---
  function updateThemeUI() {
    if (state.bedtimeMode) {
      document.body.classList.add('bedtime-mode');
      bedtimeToggleBtn.classList.add('active');
      bedtimeToggleBtn.innerHTML = '<span>☀️</span> Sunny Mode';
    } else {
      document.body.classList.remove('bedtime-mode');
      bedtimeToggleBtn.classList.remove('active');
      bedtimeToggleBtn.innerHTML = '<span>🌙</span> Bedtime Mode';
    }
  }

  function updateChestCount() {
    if (chestCount) {
      chestCount.textContent = state.bookmarks.length;
    }
  }

  function renderAgePillState() {
    agePills.forEach(pill => {
      if (pill.dataset.level === state.ageLevel) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function getAgeEditionLabel(level) {
    if (level === 'little') return '🐣 Little Explorers Edition (Ages 6–8)';
    if (level === 'junior') return '🚀 Junior Reporters Edition (Ages 12+)';
    return '🦊 Curious Kids Edition (Ages 9–11)';
  }

  // --- ARTICLES RENDERING ---
  function getFilteredArticles() {
    return NEWS_ARTICLES.filter(art => {
      // Treasure Chest filter
      if (state.showChestOnly && !state.bookmarks.includes(art.id)) {
        return false;
      }
      // Category filter
      if (state.category !== 'all' && art.category !== state.category) {
        return false;
      }
      // Positive only filter (all WonderSparks stories are positive, but let's highlight feel-goods)
      if (state.positiveOnly && !['animals', 'earth', 'tech', 'wacky'].includes(art.category)) {
        return false;
      }
      // Quiz filter
      if (state.quizOnly && !art.quiz) {
        return false;
      }
      // Search query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const ver = art.versions[state.ageLevel] || art.versions['curious'];
        const textMatch = art.title.toLowerCase().includes(q) ||
                          ver.summary.toLowerCase().includes(q) ||
                          ver.content.toLowerCase().includes(q) ||
                          art.categoryLabel.toLowerCase().includes(q);
        if (!textMatch) return false;
      }
      return true;
    });
  }

  function renderArticles() {
    const list = getFilteredArticles();

    if (list.length === 0) {
      articlesGrid.innerHTML = '';
      noResultsState.style.display = 'block';
      return;
    }

    noResultsState.style.display = 'none';

    articlesGrid.innerHTML = list.map(art => {
      const isSaved = state.bookmarks.includes(art.id);
      const ver = art.versions[state.ageLevel] || art.versions['curious'];

      return `
        <article class="article-card" data-id="${art.id}">
          <div class="card-hero-wrapper">
            ${art.heroImage}
            <div class="badge-overlay">
              <span>${art.categoryEmoji}</span>
              <span>${art.badge}</span>
            </div>
            <button class="bookmark-overlay-btn ${isSaved ? 'saved' : ''}" 
                    data-id="${art.id}" 
                    title="${isSaved ? 'Remove from Treasure Chest' : 'Save to Treasure Chest'}"
                    aria-label="Bookmark">
              ${isSaved ? '⭐' : '☆'}
            </button>
          </div>

          <div class="card-content">
            <div class="card-meta">
              <span class="card-category">${art.categoryLabel}</span>
              <span>${art.readTime}</span>
            </div>
            
            <h3 class="card-title" data-id="${art.id}">${art.title}</h3>
            
            <p class="card-summary">${ver.summary}</p>

            <div class="card-footer">
              <button class="read-btn" data-id="${art.id}">
                <span>📖</span> Read Story
              </button>
              
              <button class="audio-listen-btn ${window.speechReader && window.speechReader.isPlaying && window.speechReader.currentArticleId === art.id ? 'playing' : ''}"
                      data-id="${art.id}"
                      title="Listen aloud">
                🔊
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach article card click listeners
    articlesGrid.querySelectorAll('.card-title, .read-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        openArticleModal(id);
      });
    });

    articlesGrid.querySelectorAll('.bookmark-overlay-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        toggleBookmark(id);
      });
    });

    articlesGrid.querySelectorAll('.audio-listen-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        playArticleSpeech(id);
      });
    });
  }

  // --- BOOKMARK HANDLING ---
  function toggleBookmark(articleId) {
    if (window.soundFx) window.soundFx.playChime();
    const idx = state.bookmarks.indexOf(articleId);
    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
    } else {
      state.bookmarks.push(articleId);
    }
    localStorage.setItem('wondersparks_bookmarks', JSON.stringify(state.bookmarks));
    updateChestCount();
    renderArticles();
  }

  // --- MODAL & READING THEATER ---
  function openArticleModal(articleId) {
    if (window.soundFx) window.soundFx.playPop();
    const article = NEWS_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    state.activeArticle = article;
    const ver = article.versions[state.ageLevel] || article.versions['curious'];

    // Fill content
    modalHero.innerHTML = article.heroImage;
    modalCategoryBadge.textContent = `${article.categoryEmoji} ${article.categoryLabel}`;
    modalReadTime.textContent = article.readTime;
    modalTitle.textContent = article.title;
    modalAgeCurrentName.textContent = getAgeEditionLabel(state.ageLevel);

    // Format text with word detective term highlights
    modalArticleText.innerHTML = formatTextWithGlossary(ver.content, article.wordDetective);

    // Did you know
    modalDidYouKnowText.textContent = article.didYouKnow;

    // Word Detective vocabulary tags
    if (article.wordDetective && article.wordDetective.length > 0) {
      modalWordDetectiveSection.style.display = 'block';
      modalWordTagsGrid.innerHTML = article.wordDetective.map(term => `
        <div class="word-tag-card">
          <div class="word-name">🔍 ${term.word}</div>
          <div class="word-phonetic">Pronounced: <em>${term.pronunciation}</em></div>
          <div class="word-def">${term.meaning}</div>
        </div>
      `).join('');
    } else {
      modalWordDetectiveSection.style.display = 'none';
    }

    // Mini Quiz
    if (article.quiz) {
      modalQuizSection.style.display = 'block';
      modalQuizQuestionText.textContent = article.quiz.question;
      modalQuizFeedback.style.display = 'none';
      modalQuizOptionsList.innerHTML = article.quiz.options.map((opt, i) => `
        <button class="quiz-option-btn" data-index="${i}">${opt}</button>
      `).join('');

      // Quiz option clicks
      modalQuizOptionsList.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          handleQuizAnswer(article.quiz, parseInt(btn.dataset.index, 10));
        });
      });
    } else {
      modalQuizSection.style.display = 'none';
    }

    // Update reactions count
    updateReactionsDisplay(article.id);

    // Reset speech button state for modal
    updateModalSpeechUI();

    // Show modal
    articleModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    if (window.soundFx) window.soundFx.playPop();
    articleModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    state.activeArticle = null;
    if (window.speechReader && window.speechReader.isPlaying) {
      window.speechReader.stop();
    }
  }

  function formatTextWithGlossary(content, wordDetective = []) {
    let text = content;
    if (!wordDetective || wordDetective.length === 0) return text;

    wordDetective.forEach(item => {
      const reg = new RegExp(`\\b(${item.word})\\b`, 'gi');
      text = text.replace(reg, `<span class="word-detective-term" title="${item.pronunciation}: ${item.meaning}">$1</span>`);
    });

    return text;
  }

  // --- QUIZ LOGIC ---
  function handleQuizAnswer(quiz, selectedIndex) {
    const btns = modalQuizOptionsList.querySelectorAll('.quiz-option-btn');
    btns.forEach(b => b.disabled = true);

    if (selectedIndex === quiz.correctIndex) {
      btns[selectedIndex].classList.add('correct');
      if (window.soundFx) window.soundFx.playSuccess();
      launchConfetti();
      modalQuizFeedback.style.display = 'block';
      modalQuizFeedback.style.background = '#d3f9d8';
      modalQuizFeedback.style.color = '#2b8a3e';
      modalQuizFeedback.innerHTML = `🎉 <strong>Woohoo! Super Smart!</strong> ${quiz.explanation}`;
    } else {
      btns[selectedIndex].classList.add('incorrect');
      btns[quiz.correctIndex].classList.add('correct');
      if (window.soundFx) window.soundFx.playOops();
      modalQuizFeedback.style.display = 'block';
      modalQuizFeedback.style.background = '#ffe3e3';
      modalQuizFeedback.style.color = '#c92a2a';
      modalQuizFeedback.innerHTML = `🌟 <strong>Nice try!</strong> ${quiz.explanation}`;
    }
  }

  // --- SPEECH ENGINE INTEGRATION ---
  function playArticleSpeech(articleId) {
    const article = NEWS_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    if (window.soundFx) window.soundFx.playPop();
    const ver = article.versions[state.ageLevel] || article.versions['curious'];
    const speechText = `${article.title}. ... ${ver.content.replace(/[#*]/g, '')}`;

    if (window.speechReader.isPlaying && window.speechReader.currentArticleId === articleId) {
      window.speechReader.stop();
    } else {
      window.speechReader.speak(articleId, speechText);
    }
  }

  function updateSpeechControls(status) {
    updateModalSpeechUI();
    // Update card buttons
    articlesGrid.querySelectorAll('.audio-listen-btn').forEach(btn => {
      if (status.isPlaying && btn.dataset.id === status.articleId) {
        btn.classList.add('playing');
        btn.innerHTML = '⏸️';
      } else {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊';
      }
    });
  }

  function updateModalSpeechUI() {
    if (!window.speechReader) return;
    const isPlayingCurrent = window.speechReader.isPlaying && state.activeArticle && window.speechReader.currentArticleId === state.activeArticle.id;

    if (isPlayingCurrent) {
      modalSpeechPlayBtn.classList.add('speaking');
      speechPlayIcon.textContent = '⏸️';
      speechPlayLabel.textContent = 'Pause Reading';
    } else {
      modalSpeechPlayBtn.classList.remove('speaking');
      speechPlayIcon.textContent = '🔊';
      speechPlayLabel.textContent = 'Read Story Aloud';
    }
  }

  // --- REACTIONS ---
  function updateReactionsDisplay(articleId) {
    const article = NEWS_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const baseReactions = article.reactions;
    const userReacted = state.reactions[articleId] || {};

    reactionBtns.forEach(btn => {
      const type = btn.dataset.reaction;
      const countEl = btn.querySelector('.reaction-count');
      const extra = userReacted[type] ? 1 : 0;
      if (countEl) countEl.textContent = (baseReactions[type] || 0) + extra;

      if (userReacted[type]) {
        btn.classList.add('reacted');
      } else {
        btn.classList.remove('reacted');
      }
    });
  }

  function toggleReaction(type) {
    if (!state.activeArticle) return;
    if (window.soundFx) window.soundFx.playPop();
    const id = state.activeArticle.id;
    if (!state.reactions[id]) state.reactions[id] = {};

    state.reactions[id][type] = !state.reactions[id][type];
    localStorage.setItem('wondersparks_reactions', JSON.stringify(state.reactions));
    updateReactionsDisplay(id);
  }

  // --- DAILY POLL ---
  function renderPoll() {
    pollQuestionText.textContent = state.pollData.question;
    const totalVotes = state.pollData.options.reduce((sum, opt) => sum + opt.votes, 0);

    pollOptionsContainer.innerHTML = state.pollData.options.map(opt => {
      const percent = Math.round((opt.votes / totalVotes) * 100);
      const isSelected = state.pollVoted === opt.id;

      return `
        <button class="poll-option-btn ${isSelected ? 'selected' : ''}" data-id="${opt.id}">
          <div class="poll-bar" style="width: ${state.pollVoted ? percent : 0}%"></div>
          <div class="poll-text">
            <span>${opt.label}</span>
            ${state.pollVoted ? `<strong>${percent}%</strong>` : ''}
          </div>
        </button>
      `;
    }).join('');

    pollOptionsContainer.querySelectorAll('.poll-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!state.pollVoted) {
          submitPollVote(btn.dataset.id);
        }
      });
    });
  }

  function submitPollVote(optionId) {
    if (window.soundFx) window.soundFx.playSuccess();
    const opt = state.pollData.options.find(o => o.id === optionId);
    if (opt) {
      opt.votes += 1;
      state.pollVoted = optionId;
      localStorage.setItem('wondersparks_poll_voted', optionId);
      launchConfetti();
      renderPoll();
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Sound toggle
    soundToggleBtn.addEventListener('click', () => {
      const enabled = window.soundFx.toggleSound();
      soundLabel.textContent = enabled ? 'ON' : 'OFF';
      soundIcon.textContent = enabled ? '🔊' : '🔇';
      if (enabled) window.soundFx.playPop();
    });

    // Bedtime toggle
    bedtimeToggleBtn.addEventListener('click', () => {
      state.bedtimeMode = !state.bedtimeMode;
      localStorage.setItem('wondersparks_bedtime', state.bedtimeMode);
      if (window.soundFx) window.soundFx.playChime();
      updateThemeUI();
    });

    // Treasure chest toggle
    treasureChestBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      state.showChestOnly = !state.showChestOnly;
      if (state.showChestOnly) {
        treasureChestBtn.classList.add('active');
      } else {
        treasureChestBtn.classList.remove('active');
      }
      renderArticles();
    });

    // Brand Home button
    brandHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      state.showChestOnly = false;
      state.category = 'all';
      state.searchQuery = '';
      searchInput.value = '';
      treasureChestBtn.classList.remove('active');
      catTabs.forEach(t => t.classList.remove('active'));
      document.querySelector('.cat-tab[data-cat="all"]').classList.add('active');
      renderArticles();
    });

    // Mascot tip bounce
    mascotBounce.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      cycleMascotTip();
    });
    newMascotTipBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      cycleMascotTip();
    });

    function cycleMascotTip() {
      const rand = MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)];
      mascotMessageText.textContent = rand;
    }

    // Age group selector
    agePills.forEach(pill => {
      pill.addEventListener('click', () => {
        if (window.soundFx) window.soundFx.playPop();
        state.ageLevel = pill.dataset.level;
        localStorage.setItem('wondersparks_age', state.ageLevel);
        renderAgePillState();
        renderArticles();
        if (state.activeArticle) {
          openArticleModal(state.activeArticle.id);
        }
      });
    });

    // Categories
    catTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (window.soundFx) window.soundFx.playPop();
        catTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.category = tab.dataset.cat;
        renderArticles();
      });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderArticles();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      state.category = 'all';
      catTabs.forEach(t => t.classList.remove('active'));
      document.querySelector('.cat-tab[data-cat="all"]').classList.add('active');
      renderArticles();
    });

    // Quick filter badges
    positiveOnlyBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      state.positiveOnly = !state.positiveOnly;
      positiveOnlyBtn.classList.toggle('active', state.positiveOnly);
      renderArticles();
    });

    quizAvailableBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      state.quizOnly = !state.quizOnly;
      quizAvailableBtn.classList.toggle('active', state.quizOnly);
      renderArticles();
    });

    // Riddle reveal
    revealRiddleBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playSuccess();
      launchConfetti();
      riddleAnswerBox.style.display = 'block';
      revealRiddleBtn.style.display = 'none';
    });

    // Junior Reporter Tip
    submitNewsTipBtn.addEventListener('click', () => {
      if (window.soundFx) window.soundFx.playPop();
      const tip = prompt("What curious news or science question would you like Barnaby to research?");
      if (tip) {
        if (window.soundFx) window.soundFx.playSuccess();
        launchConfetti();
        alert("🎉 Thanks, Star Reporter! Barnaby put your tip in his explorer notebook!");
      }
    });

    // Modal close
    modalCloseBtn.addEventListener('click', closeArticleModal);
    articleModalBackdrop.addEventListener('click', (e) => {
      if (e.target === articleModalBackdrop) closeArticleModal();
    });

    // Keyboard ESC to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && articleModalBackdrop.classList.contains('open')) {
        closeArticleModal();
      }
    });

    // Modal speech read button
    modalSpeechPlayBtn.addEventListener('click', () => {
      if (state.activeArticle) {
        playArticleSpeech(state.activeArticle.id);
      }
    });

    // Speed buttons
    speedBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.soundFx) window.soundFx.playPop();
        speedBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const rate = parseFloat(btn.dataset.rate);
        if (window.speechReader) window.speechReader.setRate(rate);
      });
    });

    // Reaction clicks
    reactionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleReaction(btn.dataset.reaction);
      });
    });

    // Print button
    printArticleBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
