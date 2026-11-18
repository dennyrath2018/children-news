// Kid-friendly Text-to-Speech Engine
class SpeechReader {
  constructor() {
    this.synth = window.speechSynthesis;
    this.utterance = null;
    this.isPlaying = false;
    this.rate = 0.95; // Slightly slower than default for kid clarity
    this.currentArticleId = null;
    this.onStateChange = null;
  }

  isSupported() {
    return 'speechSynthesis' in window;
  }

  getBestVoice() {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    // Prefer friendly English voices (Samantha, Daniel, Google US English, etc.)
    return voices.find(v => v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Female') || v.name.includes('Google')))
      || voices.find(v => v.lang.startsWith('en'))
      || voices[0] || null;
  }

  speak(articleId, text, onEndCallback) {
    if (!this.isSupported()) {
      alert("Oops! Text-to-speech isn't supported on this browser.");
      return;
    }

    if (this.isPlaying && this.currentArticleId === articleId) {
      this.pause();
      return;
    }

    this.stop(); // Stop any ongoing speech

    this.currentArticleId = articleId;
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.rate = this.rate;
    this.utterance.pitch = 1.05; // Slightly cheerful pitch

    const voice = this.getBestVoice();
    if (voice) this.utterance.voice = voice;

    this.utterance.onend = () => {
      this.isPlaying = false;
      this.currentArticleId = null;
      if (this.onStateChange) this.onStateChange({ isPlaying: false, articleId: null });
      if (onEndCallback) onEndCallback();
    };

    this.utterance.onerror = (e) => {
      console.warn("Speech error:", e);
      this.isPlaying = false;
      this.currentArticleId = null;
      if (this.onStateChange) this.onStateChange({ isPlaying: false, articleId: null });
    };

    this.synth.speak(this.utterance);
    this.isPlaying = true;
    if (this.onStateChange) this.onStateChange({ isPlaying: true, articleId });
  }

  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange({ isPlaying: false, articleId: this.currentArticleId, isPaused: true });
    }
  }

  resume() {
    if (this.synth && !this.isPlaying && this.currentArticleId) {
      this.synth.resume();
      this.isPlaying = true;
      if (this.onStateChange) this.onStateChange({ isPlaying: true, articleId: this.currentArticleId });
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isPlaying = false;
      this.currentArticleId = null;
      if (this.onStateChange) this.onStateChange({ isPlaying: false, articleId: null });
    }
  }

  setRate(newRate) {
    this.rate = newRate;
    if (this.isPlaying && this.utterance) {
      // Re-trigger with new speed
      const text = this.utterance.text;
      const id = this.currentArticleId;
      this.speak(id, text);
    }
  }
}

window.speechReader = new SpeechReader();
