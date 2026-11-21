// News stories, explorer badges, and learning database for WonderSparks News
// Updated with the latest real-world science, space, animal, tech, and sports discoveries!

const EXPLORER_BADGES = [
  { id: "space_cadet", name: "Space Cadet", emoji: "🚀", desc: "Explore a Space & Science story", requirement: "read_space" },
  { id: "wildlife_scout", name: "Panda Pal", emoji: "🐾", desc: "Discover an Animal & Nature story", requirement: "read_animals" },
  { id: "tech_titan", name: "Kid Inventor", emoji: "⚡", desc: "Learn about an Invention story", requirement: "read_tech" },
  { id: "dino_digger", name: "Fossil Finder", emoji: "🦖", desc: "Unearth a Prehistoric Dino story", requirement: "read_earth" },
  { id: "sports_champ", name: "Super Athlete", emoji: "🛹", desc: "Read an exciting Sports story", requirement: "read_sports" },
  { id: "wacky_whiz", name: "Curious Explorer", emoji: "🐸", desc: "Read a Wacky & Fun mystery story", requirement: "read_wacky" },
  { id: "quiz_whiz", name: "Quiz Master", emoji: "🧠", desc: "Score 100% on any story mini-quiz", requirement: "quiz_win" },
  { id: "poll_voter", name: "Voice of Wonder", emoji: "🗳️", desc: "Cast your vote in the Daily Kids Poll", requirement: "poll_vote" },
  { id: "night_owl", name: "Starlit Dreamer", emoji: "🌙", desc: "Explore in Bedtime Starry Mode", requirement: "bedtime_read" },
  { id: "word_detective", name: "Super Sleuth", emoji: "🔍", desc: "Inspect a Word Detective term", requirement: "word_click" }
];

const NEWS_ARTICLES = [
  // 1. SPACE & SCIENCE - LATEST FEATURE
  {
    id: "space-mars-sunset-clouds",
    title: "NASA Rover Captures Glowing Twilight Sunset Clouds on Mars!",
    slug: "mars-sunset-clouds",
    isFeatured: true,
    difficulty: "explorer",
    difficultyLabel: "⭐⭐ Explorer Tier",
    category: "space",
    categoryLabel: "Space & Science",
    categoryEmoji: "🚀",
    bannerEmoji: "🪐",
    gradient: "linear-gradient(135deg, #f0932b 0%, #eb4d4b 50%, #2c2c54 100%)",
    readTime: "3 min read",
    audioTime: "1:40",
    date: "Latest NASA Discovery",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="marsSkyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#191970"/>
          <stop offset="40%" stop-color="#472b62"/>
          <stop offset="70%" stop-color="#c44569"/>
          <stop offset="100%" stop-color="#f8a5c2"/>
        </linearGradient>
        <radialGradient id="marsSunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#fffa65"/>
          <stop offset="100%" stop-color="#ff3838" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="320" fill="url(#marsSkyGrad)" rx="24"/>
      <!-- Blue Martian Sunset Glow -->
      <circle cx="340" cy="180" r="90" fill="url(#marsSunGlow)" opacity="0.8"/>
      <circle cx="340" cy="180" r="16" fill="#7ed6df" opacity="0.9"/>
      <!-- Iridescent Martian Twilight Clouds -->
      <path d="M120,90 Q220,70 340,95 T520,80" stroke="#70a1ff" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.85"/>
      <path d="M180,120 Q300,105 420,125 T560,110" stroke="#e056fd" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.75"/>
      <path d="M80,140 Q200,125 320,145 T480,135" stroke="#7bed9f" stroke-width="6" stroke-linecap="round" fill="none" opacity="0.7"/>
      <!-- Red Mountains / Craters -->
      <path d="M0,230 Q120,180 260,220 T520,200 L600,230 L600,320 L0,320 Z" fill="#b33939"/>
      <path d="M-20,255 Q180,225 380,260 T620,240 L620,320 L-20,320 Z" fill="#cd6133"/>
      <!-- Curiosity Rover -->
      <g transform="translate(140, 210)">
        <rect x="0" y="30" width="70" height="28" rx="8" fill="#f5f6fa"/>
        <!-- Wheels -->
        <circle cx="10" cy="64" r="10" fill="#2f3542"/>
        <circle cx="35" cy="64" r="10" fill="#2f3542"/>
        <circle cx="60" cy="64" r="10" fill="#2f3542"/>
        <!-- Camera Mast -->
        <line x1="20" y1="30" x2="20" y2="2" stroke="#dcdde1" stroke-width="4"/>
        <rect x="12" y="-6" width="16" height="10" rx="3" fill="#2f3542"/>
        <circle cx="20" cy="-1" r="3" fill="#00d2d3"/>
        <!-- Solar sparkle -->
        <text x="75" y="15" font-size="20">✨</text>
      </g>
    </svg>`,
    badge: "Cosmic Twilight",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "NASA's Curiosity rover on Mars snapped pictures of glowing clouds in the Martian twilight! Because Mars is so cold, these clouds are made of dry ice and glow like rainbows when the Sun dips down.",
        content: `Did you know that sunsets on Mars are blue? It is true! On Earth, our sunsets look red and orange, but on dusty Mars, the sky turns a mysterious twilight blue!

NASA's Curiosity rover looked up into the Martian evening sky and captured stunning photos of shimmering, pastel-colored clouds. 

Mars is so freezing cold that these high-altitude clouds are not made of liquid water like Earth's clouds—they are made of frozen carbon dioxide, also known as dry ice crystals! As the Martian sun sank below the horizon, its last rays caught the crystals and made them glow like rainbow pearls.`
      },
      curious: {
        summary: "NASA's Curiosity rover observed rare 'noctilucent' clouds on Mars. Formed at altitudes over 37 miles high from dry ice crystals, these clouds reveal secrets about atmospheric wave patterns on Mars.",
        content: `Just after sunset on the dusty Red Planet, NASA's Curiosity rover turned its Mastcam toward the darkening sky. What it photographed looked like magical glowing ribbons drifting through space.

These are known as **noctilucent clouds** (meaning 'night-shining' clouds). While most Martian clouds hover around 37 miles (60 km) up and consist of water ice, these twilight clouds formed much higher in the ultra-freezing upper atmosphere, where temperatures plunge below -130°C (-200°F).

At these extreme altitudes, carbon dioxide gas freezes directly into sparkling crystalline dry ice. Because they catch the sunlight from below the horizon, the clouds scatter light into iridescent pastel rainbows of pink, teal, and gold. 

Scientists are using these images to map how Martian wind currents transport moisture and dust around the entire planet!`
      },
      junior: {
        summary: "Curiosity's high-resolution Mastcam imagery captured noctilucent cirrus-type clouds at mesospheric altitudes on Mars, providing novel empirical data on dry ice nucleation and atmospheric wave dynamics.",
        content: `Observations conducted by NASA's Mars Science Laboratory (Curiosity) have documented extraordinary noctilucent cloud formations within the Martian mesosphere, exceeding altitudes of 60 kilometers.

Unlike terrestrial water-vapor clouds or lower-troposphere Martian water-ice hazes, these mesospheric clouds are composed of nucleated carbon dioxide (CO2) microcrystals. Planetary meteorologists determined that the temperature structure at these extreme altitudes drops below the condensation threshold of CO2.

The iridescent optical scattering—known as cloud iridescence or photometeors—is produced by diffraction when sunlight passes through uniformly sized ice crystals. Analyzing the phase and drift rate of these nocturnal cloud bands offers planetary scientists vital insight into the thermal structure, gravity waves, and volatile atmospheric cycles of modern Mars.`
      }
    },
    didYouKnow: "While sunsets on Earth look fiery orange and red, sunsets on Mars appear in glowing shades of pale blue and violet because fine Martian dust scatters red light away!",
    wordDetective: [
      { word: "Noctilucent", pronunciation: "nok-tih-LOO-sent", meaning: "Shining or glowing brightly in the dark night sky after the sun has set." },
      { word: "Dry Ice", pronunciation: "DRY ice", meaning: "Carbon dioxide gas frozen into a super-cold solid without melting into a liquid." },
      { word: "Iridescence", pronunciation: "eer-ih-DESS-ens", meaning: "A glowing rainbow shimmer that changes colors when you look from different angles!" }
    ],
    quiz: {
      question: "What are the high twilight clouds on Mars primarily made of?",
      options: ["Cotton candy", "Frozen carbon dioxide (dry ice)", "Liquid ocean spray", "Hot volcanic steam"],
      correctIndex: 1,
      explanation: "Because the high Martian atmosphere is unimaginably cold (below -130°C), carbon dioxide gas freezes directly into glittering dry ice crystals!"
    },
    reactions: { thumbsUp: 88, heart: 142, wow: 165, laugh: 4 }
  },

  // 2. ANIMALS & NATURE - LATEST DISCOVERY
  {
    id: "animals-octopus-dreaming",
    title: "Scientists Discover Octopuses Change Colors When Dreaming About Hunts!",
    slug: "octopus-dreaming-colors",
    isFeatured: false,
    difficulty: "starter",
    difficultyLabel: "⭐ Starter Tier",
    category: "animals",
    categoryLabel: "Animals & Nature",
    categoryEmoji: "🐾",
    bannerEmoji: "🐙",
    gradient: "linear-gradient(135deg, #10ac84 0%, #00d2d3 100%)",
    readTime: "2 min read",
    audioTime: "1:25",
    date: "Marine Biology",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="coralSeaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0984e3"/>
          <stop offset="60%" stop-color="#00cec9"/>
          <stop offset="100%" stop-color="#006266"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#coralSeaGrad)" rx="24"/>
      <!-- Bubbles -->
      <circle cx="80" cy="180" r="10" fill="#fff" opacity="0.3"/>
      <circle cx="110" cy="120" r="6" fill="#fff" opacity="0.4"/>
      <circle cx="480" cy="140" r="14" fill="#fff" opacity="0.25"/>
      <circle cx="510" cy="80" r="8" fill="#fff" opacity="0.35"/>
      <!-- Sea Floor & Corals -->
      <path d="M-10,270 Q140,250 280,270 T610,260 L610,320 L-10,320 Z" fill="#2d3436" opacity="0.4"/>
      <path d="M500,320 L510,240 L530,220 L550,250 L560,320 Z" fill="#e84393" opacity="0.7"/>
      <!-- Snoozing Octopus with color patterns -->
      <g transform="translate(240, 100)">
        <!-- Thought Dream Bubble -->
        <circle cx="160" cy="-20" r="6" fill="#ffeaa7" opacity="0.8"/>
        <circle cx="180" cy="-35" r="10" fill="#ffeaa7" opacity="0.9"/>
        <ellipse cx="230" cy="-55" rx="55" ry="35" fill="#fff" opacity="0.95"/>
        <text x="195" y="-48" font-size="28">🦀 😋</text>
        <!-- Octopus Body (Half Purple, Half Gold - Dreaming!) -->
        <path d="M40,60 Q80,10 120,60 Q130,110 80,120 Q30,110 40,60 Z" fill="#6c5ce7"/>
        <path d="M80,15 Q120,60 120,95 Q100,115 80,120 Z" fill="#fdcb6e" opacity="0.85"/>
        <!-- Closed Snoozing Eyes -->
        <path d="M60,65 Q70,72 80,65" stroke="#2d3436" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M95,65 Q105,72 115,65" stroke="#2d3436" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- Zzz -->
        <text x="110" y="30" font-size="22" fill="#ffeaa7" font-weight="bold">Zzz...</text>
        <!-- Wavy Tentacles -->
        <path d="M40,110 Q10,130 5,160 Q20,180 50,150" stroke="#6c5ce7" stroke-width="16" fill="none" stroke-linecap="round"/>
        <path d="M65,115 Q50,150 40,175 Q60,195 80,165" stroke="#a29bfe" stroke-width="16" fill="none" stroke-linecap="round"/>
        <path d="M95,115 Q100,160 120,175 Q140,160 115,145" stroke="#fdcb6e" stroke-width="16" fill="none" stroke-linecap="round"/>
        <path d="M120,105 Q150,130 170,155 Q160,180 135,160" stroke="#f39c12" stroke-width="16" fill="none" stroke-linecap="round"/>
      </g>
    </svg>`,
    badge: "Ocean Dreams",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Do sea creatures dream? Scientists put underwater cameras on sleeping octopuses and saw their skin rapidly flash yellow, red, and spiky green! Researchers believe they are dreaming of chasing crabs!",
        content: `When you fall asleep, do you dream of flying, eating ice cream, or running on the playground?

Marine biologists discovered that eight-armed octopuses have sweet dreams too!

While taking a cozy nap in rocky reef dens, octopuses experience a special kind of sleep. Suddenly, their skin begins to pulse with bright rainbow colors. Tiny skin pockets called chromatophores expand and shrink, making the sleeping octopus turn creamy white, then fiery orange, then bumpy green!

Scientists believe that during these sleep stages, the octopus's big brain is replaying its daytime adventures—like sneaking up on a delicious crab!`
      },
      curious: {
        summary: "Neurobiologists discovered that octopuses experience two distinct sleep stages: 'quiet sleep' and 'active sleep'. During active sleep, they exhibit rapid eye movements and flash vivid camouflage patterns.",
        content: `Octopuses have nine brains—one central brain and a mini-brain inside each of their eight flexible arms. But what happens when an octopus goes to bed?

A research team studying cephalopods in laboratory habitats noticed that octopuses don't simply drift quietly. Every 30 to 40 minutes, a sleeping octopus enters an 'active sleep' phase that looks remarkably like human REM (Rapid Eye Movement) sleep.

During this stage, their breathing speeds up, their suckers twitch, and their skin puts on an astonishing light show. They flash camouflage patterns that match rocky ledges, sandy floors, and coral reefs.

Because cephalopods use camouflage to hunt prey and hide from sharks while awake, neuroscientists conclude that octopuses are likely consolidating their memories—replaying and practicing their hunting maneuvers in their dreams!`
      },
      junior: {
        summary: "Cephalopod sleep architecture exhibits a two-stage cycle homologous to vertebrate non-REM and REM sleep, characterized by dynamic chromatic display modulation and neural memory consolidation.",
        content: `In a breakthrough study of invertebrate neurobiology, researchers documented that Octopus insularis displays biphasic sleep cycles. Periods of 'quiet sleep' (characterized by stable, pale integument and low metabolic rate) alternate cyclically with brief, dynamic 'active sleep' states.

During active sleep, which persists for approximately 60 seconds per cycle, octopuses exhibit sudden involuntary muscle twitching, rapid pupil constriction, and intricate chromatic patterning mediated by millions of neuromuscular dermal chromatophores.

These color and textural permutations mirror the exact deceptive camouflage displays deployed during daytime predatory interactions with crustaceans. This discovery demonstrates that complex two-stage sleep and offline neural memory consolidation evolved independently in cephalopods and vertebrates through convergent evolution.`
      }
    },
    didYouKnow: "An octopus has three hearts and blue blood! Two hearts pump blood to its gills, while the third heart circulates oxygen to the rest of its body.",
    wordDetective: [
      { word: "Chromatophore", pronunciation: "kroh-MAT-uh-for", meaning: "A special cell in an octopus's skin filled with colorful pigment that expands like a balloon to change color!" },
      { word: "Cephalopod", pronunciation: "SEF-uh-luh-pod", meaning: "The clever sea animal family that includes octopuses, squids, and cuttlefish (it means 'head-foot')." },
      { word: "Consolidation", pronunciation: "kon-sol-ih-DAY-shun", meaning: "The process where your sleeping brain organizes memories and locks in what you learned during the day." }
    ],
    quiz: {
      question: "Why do octopuses change colors and flash patterns while asleep?",
      options: ["Because they are cold", "They are in an active dream sleep stage replaying daytime memories", "To scare away mermaids", "Because their alarm clock went off"],
      correctIndex: 1,
      explanation: "Just like humans dream during REM sleep, octopuses enter an active sleep stage where their brain replays daytime hunting maneuvers and flashes camouflage colors!"
    },
    reactions: { thumbsUp: 110, heart: 185, wow: 142, laugh: 8 }
  },

  // 3. INVENTIONS & TECH - LATEST DISCOVERY
  {
    id: "tech-robo-seabird",
    title: "Engineers Build Robo-Puffin That Flies in the Air and Dives Deep Underwater!",
    slug: "flying-diving-robo-seabird",
    isFeatured: false,
    difficulty: "master",
    difficultyLabel: "⭐⭐⭐ Master Tier",
    category: "tech",
    categoryLabel: "Inventions & Tech",
    categoryEmoji: "⚡",
    bannerEmoji: "🤖",
    gradient: "linear-gradient(135deg, #0984e3 0%, #00cec9 100%)",
    readTime: "3 min read",
    audioTime: "1:45",
    date: "Robotics Breakthrough",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="splitSkyOcean" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#74b9ff"/>
          <stop offset="48%" stop-color="#dfe6e9"/>
          <stop offset="50%" stop-color="#0984e3"/>
          <stop offset="100%" stop-color="#006266"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#splitSkyOcean)" rx="24"/>
      <!-- Water Surface line with splashes -->
      <line x1="0" y1="160" x2="600" y2="160" stroke="#fff" stroke-width="3" stroke-dasharray="16 8"/>
      <!-- Air Section: Sun & clouds -->
      <circle cx="510" cy="55" r="30" fill="#feca57"/>
      <!-- The Robo-Puffin (Half diving through the water interface!) -->
      <g transform="translate(260, 105) rotate(25)">
        <!-- Sleek Robot Body -->
        <ellipse cx="40" cy="40" rx="60" ry="26" fill="#2d3436"/>
        <ellipse cx="40" cy="46" rx="42" ry="16" fill="#f5f6fa"/>
        <!-- Beak (Bright orange puffin sensor) -->
        <polygon points="95,35 130,42 95,55" fill="#ff7675"/>
        <line x1="95" y1="45" x2="115" y2="45" stroke="#ffeaa7" stroke-width="3"/>
        <!-- Camera Eye -->
        <circle cx="85" cy="34" r="7" fill="#00cec9"/>
        <circle cx="86" cy="33" r="2.5" fill="#fff"/>
        <!-- Dual-Morphing Wings -->
        <path d="M30,30 L-10,-20 L40,-5 Z" fill="#0984e3" stroke="#74b9ff" stroke-width="2"/>
        <path d="M30,50 L-5,85 L35,65 Z" fill="#0984e3" stroke="#74b9ff" stroke-width="2"/>
        <!-- Jet Propulsion Splash & Bubbles -->
        <circle cx="-35" cy="40" r="8" fill="#fff" opacity="0.7"/>
        <circle cx="-55" cy="42" r="14" fill="#fff" opacity="0.4"/>
      </g>
      <!-- Underwater Fish looking at the robot in awe -->
      <g transform="translate(100, 230)">
        <ellipse cx="20" cy="15" rx="18" ry="10" fill="#fdcb6e"/>
        <polygon points="2,15 -10,8 -10,22" fill="#fdcb6e"/>
        <circle cx="28" cy="12" r="2" fill="#111"/>
      </g>
      <text x="140" y="225" font-size="20">🐟 ?!</text>
    </svg>`,
    badge: "Bio-Hybrid Robotics",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Puffins are adorable seabirds that can flap their wings in the air and then swim underwater like fish! Now, scientists have built a real robot bird that can fly through the clouds and plunge underwater without stopping!",
        content: `Have you ever seen a puffin? They look like tiny penguins with colorful rainbow beaks!

Unlike penguins who can only swim, puffins have a magical double-power: they fly high in the ocean breeze, and when they spot a snack, SPLASH! They dive straight into the deep waves and use their wings like flippers!

Robotics engineers in California thought: 'Why can't robots do that too?'

So they built **Nautilus-Wing**! It is a lightweight waterproof robot equipped with transforming wings. When flying in the air, its wings stretch out wide. But the moment it crashes through the sea surface, its wings tuck tightly, turning into high-speed underwater propellers to monitor endangered coral reefs!`
      },
      curious: {
        summary: "Inspired by the dual-medium locomotion of puffins and diving ducks, mechanical engineers developed a morphing-wing drone capable of seamless air-to-water transitions and autonomous coral reef inspection.",
        content: `Designing a machine that can travel through both air and water is one of the hardest challenges in engineering. Air is thin and light, while water is nearly 800 times denser and heavier!

To solve this physics riddle, roboticists studied seabirds like puffins and murres. These birds have flexible wing joints that adjust stiffness depending on whether they are pushing against thin air or thick water.

The resulting robot, nicknamed the 'Aqua-Puffin', features smart morphing carbon-fiber wings. Above the water, a brushless electric motor flaps the wings for aerodynamic lift. When diving beneath ocean waves, a miniature pneumatic hinge folds the wingtips back by 40%, preventing the wings from snapping under water pressure.

Equipped with 4K underwater cameras and sonar, this flying submarine can inspect hard-to-reach ocean sea caves, spot oil spills, and safely film marine animals without loud motor noise!`
      },
      junior: {
        summary: "Utilizing bio-inspired compliant wing kinematics, researchers have engineered an amphibious unmanned aerial-aquatic vehicle (UAV/UUV) featuring dynamic density compensation and adaptive hydro-aerodynamic morphing.",
        content: `Locomotion across fluid interfaces poses severe hydro-aerodynamic constraints due to the 800-fold density disparity between air and water. High-aspect-ratio airfoils optimized for low Reynolds number flight normally experience catastrophic structural overload upon fluid impact.

Engineers overcame this hydrodynamic barrier by modeling the avian musculoskeletal morphology of Fratercula arctica (Atlantic puffin). The aerial-aquatic vehicle utilizes bistable composite wing spars coupled to high-torque servomotors.

Upon surface breaching, the wings rapidly decamber and contract their effective surface area by 42%, transitioning from aerodynamic lift-generation to low-drag hydrodynamic flipper propulsion. Dual-mode waterproof brushless thrusters provide continuous forward thrust across the boundary layer, paving the way for multi-domain ecological sensing.`
      }
    },
    didYouKnow: "Atlantic puffins can dive down to 200 feet (60 meters) below the ocean surface and hold their breath for up to a minute while chasing fish!",
    wordDetective: [
      { word: "Amphibious", pronunciation: "am-FIB-ee-us", meaning: "Able to live, operate, or move smoothly in both air/land and underwater!" },
      { word: "Morphing", pronunciation: "MORF-ing", meaning: "Changing shape or structure smoothly to perform different jobs." },
      { word: "Reynolds Number", pronunciation: "REN-ulds num-ber", meaning: "A physics equation that measures how fluids like air and water flow around moving objects." }
    ],
    quiz: {
      question: "How does the robo-puffin change its wings when it dives into deep water?",
      options: ["It drops them off", "It folds them smaller and stiffer so water pressure doesn't break them", "It turns them into giant balloons", "It replaces them with rocket boosters"],
      correctIndex: 1,
      explanation: "Water is 800 times denser than air! The robot folds its wings smaller so the heavy water pressure doesn't snap them while swimming!"
    },
    reactions: { thumbsUp: 98, heart: 112, wow: 178, laugh: 6 }
  },

  // 4. DINO & HISTORY - LATEST DISCOVERY
  {
    id: "earth-dino-mummy-skin",
    title: "Remarkable 66-Million-Year-Old 'Dino Mummy' Found with Real Preserved Skin!",
    slug: "dinosaur-mummy-preserved-skin",
    isFeatured: false,
    difficulty: "explorer",
    difficultyLabel: "⭐⭐ Explorer Tier",
    category: "earth",
    categoryLabel: "Dino & History",
    categoryEmoji: "🦖",
    bannerEmoji: "🦕",
    gradient: "linear-gradient(135deg, #f5cd79 0%, #e17055 100%)",
    readTime: "3 min read",
    audioTime: "1:35",
    date: "Paleontology Scoop",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="canyonGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdcb6e"/>
          <stop offset="60%" stop-color="#e17055"/>
          <stop offset="100%" stop-color="#6c5ce7"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#canyonGrad)" rx="24"/>
      <!-- Sandstone layers -->
      <path d="M0,180 L600,160 L600,320 L0,320 Z" fill="#d63031" opacity="0.3"/>
      <path d="M0,220 L600,210 L600,320 L0,320 Z" fill="#634235" opacity="0.5"/>
      <!-- Dino Mummy Fossil Bed -->
      <g transform="translate(180, 110)">
        <!-- Skeleton & Preserved Skin Outline -->
        <ellipse cx="120" cy="80" rx="90" ry="45" fill="#f8a5c2" opacity="0.3"/>
        <!-- Textured Scales & Spikes along spine -->
        <path d="M40,65 Q120,40 210,80" stroke="#ffeaa7" stroke-width="6" fill="none"/>
        <polygon points="60,55 65,42 70,55" fill="#fab1a0"/>
        <polygon points="85,50 90,36 95,50" fill="#fab1a0"/>
        <polygon points="110,48 115,32 120,48" fill="#fab1a0"/>
        <polygon points="135,50 140,36 145,50" fill="#fab1a0"/>
        <polygon points="160,56 165,44 170,56" fill="#fab1a0"/>
        <!-- Duck-billed Head with real skin impression -->
        <ellipse cx="230" cy="85" rx="35" ry="20" fill="#ffeaa7"/>
        <path d="M250,80 Q275,85 260,95 Q245,95 240,85 Z" fill="#fdcb6e"/>
        <!-- Ribs visible under fossilized skin -->
        <line x1="90" y1="65" x2="85" y2="95" stroke="#fff" stroke-width="4"/>
        <line x1="110" y1="65" x2="105" y2="100" stroke="#fff" stroke-width="4"/>
        <line x1="130" y1="67" x2="125" y2="100" stroke="#fff" stroke-width="4"/>
        <line x1="150" y1="72" x2="148" y2="95" stroke="#fff" stroke-width="4"/>
        <!-- Magnifying Glass Discovery -->
        <circle cx="95" cy="50" r="28" stroke="#00cec9" stroke-width="5" fill="none"/>
        <line x1="115" y1="70" x2="140" y2="95" stroke="#00cec9" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Sparkle discovery stars -->
      <text x="70" y="90" font-size="28">✨</text>
      <text x="470" y="80" font-size="32">🔍</text>
    </svg>`,
    badge: "Fossil Mummy",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Most dinosaur discoveries are just bare white bones. But paleontologists in Wyoming uncovered a super-rare 'dinosaur mummy' with actual bumpy skin, scaly armor, and spiky ridges still attached after 66 million years!",
        content: `When you visit a natural history museum, you usually see giant dinosaur skeletons made of brown fossil bones.

Now imagine finding a dinosaur that still has its REAL skin!

Fossil hunters in Wyoming discovered two magnificent duck-billed dinosaurs called hadrosaurs. Because these dinosaurs were buried super fast under ancient river mud, their soft tissues didn't rot away.

Instead, their skin turned into stone! Scientists can see every tiny pebble-sized scale, spiky crests running down their backs, and even the pads on their feet. For the very first time, we know exactly what it felt like to pet a real dinosaur!`
      },
      curious: {
        summary: "In a landmark excavation in Wyoming's Hell Creek Formation, paleontologists uncovered an exquisitely preserved Edmontosaurus specimen retaining 3D epidermal scale patterns and keratinous spinal frills.",
        content: `Finding a dinosaur skeleton is thrilling—but finding a 'dinosaur mummy' is like winning the ultimate paleontology jackpot!

Researchers working in the badlands of Wyoming announced the recovery of an *Edmontosaurus* (a duck-billed herbivore) so well-preserved that soft tissues petrified before decomposing.

Using high-resolution CT scanners and laser imaging, scientists confirmed that the specimen preserves 3D impressions of hexagonal scales, thick muscular foot pads, and a row of defensive keratin spikes along the spine that nobody knew existed!

Before this discovery, artists had to guess what dinosaur skin looked like. Now, microscopic analysis shows hadrosaur skin was tough, pebbled like a basketball, and varied in pattern between the belly, neck, and tail to help the animal camouflage in ancient redwood forests.`
      },
      junior: {
        summary: "Exceptionally preserved soft-tissue integument from Hell Creek hadrosaurid specimens provides microscopic evidence of three-dimensional keratinous rhamphotheca, reticulate scales, and dorsomedial frills.",
        content: `Taphonomic conditions capable of preserving unmineralized dinosaurian integument are extraordinarily rare. Excavations in the Maastrichtian strata of the Hell Creek Formation have yielded an exceptional hadrosaurid (Edmontosaurus annectens) exhibiting extensive mummified epidermal envelopes.

Rapid burial in hypoxic fluvial silts arrested post-mortem bacterial decomposition, facilitating mineral replacement of structural keratin and dermal layers. 

Scanning electron microscopy (SEM) reveals polymorphic scale microstructures: polygonal basement scales interspaced with larger feature scales and an unsegmented midline dorsal frill. Biomechanical reconstructions indicate that the dermal envelope possessed significant tensile elasticity, resolving long-standing phylogenetic debates regarding dinosaur soft-tissue morphology.`
      }
    },
    didYouKnow: "Scientists have now discovered and named over 1,400 distinct species of dinosaurs across more than 90 countries on Earth—and nearly 50 new species are found every single year!",
    wordDetective: [
      { word: "Taphonomy", pronunciation: "taf-ON-uh-mee", meaning: "The branch of paleontology that studies how living creatures decay and become preserved as fossils." },
      { word: "Hadrosaur", pronunciation: "HAD-roh-sor", meaning: "A large, plant-eating dinosaur famous for having a flat, duck-like bill and chewing hundreds of tough prehistoric leaves!" },
      { word: "Keratin", pronunciation: "KER-uh-tin", meaning: "The tough, natural protein that makes up your fingernails, bird beaks, and dinosaur horns!" }
    ],
    quiz: {
      question: "Why was this 'dinosaur mummy' able to keep its skin for 66 million years?",
      options: ["Ancient cavemen wrapped it in bandages", "It was buried very quickly under muddy river sediment before it could rot away", "It was frozen in a block of strawberry ice cream", "The skin was made of steel"],
      correctIndex: 1,
      explanation: "Rapid burial in thick river mud prevented oxygen and bacteria from breaking down the skin, allowing the soft scales to turn into stone fossils over millions of years!"
    },
    reactions: { thumbsUp: 105, heart: 130, wow: 189, laugh: 5 }
  },

  // 5. SPORTS & ACTION - LATEST INSPIRATION
  {
    id: "sports-math-world-record",
    title: "15-Year-Old 'Human Calculator' Sets Mind-Blowing World Record in Fast Math!",
    slug: "teen-human-calculator-world-record",
    isFeatured: false,
    difficulty: "starter",
    difficultyLabel: "⭐ Starter Tier",
    category: "sports",
    categoryLabel: "Sports & Play",
    categoryEmoji: "🛹",
    bannerEmoji: "🏆",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    readTime: "2 min read",
    audioTime: "1:20",
    date: "Brain Sports",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="mathSportGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3742fa"/>
          <stop offset="100%" stop-color="#5352ed"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#mathSportGrad)" rx="24"/>
      <!-- Digital Matrix & Lightning Numbers -->
      <text x="60" y="80" font-size="28" fill="#70a1ff" opacity="0.6">8,492 + 3,175 + 9,204 = ?</text>
      <text x="320" y="130" font-size="24" fill="#eccc68" opacity="0.5">30.9 SECONDS!</text>
      <!-- Lightning bolt speed -->
      <polygon points="300,40 260,110 290,110 250,190 320,100 285,100" fill="#ffa502"/>
      <!-- The Young Champion -->
      <g transform="translate(180, 110)">
        <!-- Medal on chest -->
        <circle cx="120" cy="115" r="18" fill="#ffd32a" stroke="#ffa502" stroke-width="3"/>
        <text x="113" y="122" font-size="18">🥇</text>
        <line x1="110" y1="85" x2="116" y2="102" stroke="#ff4757" stroke-width="4"/>
        <line x1="130" y1="85" x2="124" y2="102" stroke="#ff4757" stroke-width="4"/>
        <!-- Smiling Head -->
        <circle cx="120" cy="50" r="32" fill="#f8c291"/>
        <!-- Glasses -->
        <circle cx="108" cy="48" r="9" stroke="#2f3542" stroke-width="3" fill="none"/>
        <circle cx="132" cy="48" r="9" stroke="#2f3542" stroke-width="3" fill="none"/>
        <line x1="117" y1="48" x2="123" y2="48" stroke="#2f3542" stroke-width="3"/>
        <!-- Happy Smile -->
        <path d="M110,64 Q120,74 130,64" stroke="#2f3542" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Thumbs up hands -->
        <circle cx="65" cy="110" r="12" fill="#f8c291"/>
        <text x="56" y="117" font-size="16">👍</text>
        <circle cx="175" cy="110" r="12" fill="#f8c291"/>
        <text x="166" y="117" font-size="16">👍</text>
      </g>
      <!-- Confetti -->
      <circle cx="100" cy="190" r="6" fill="#ff6b81"/>
      <circle cx="480" cy="190" r="8" fill="#2ed573"/>
      <circle cx="450" cy="70" r="7" fill="#ffa502"/>
    </svg>`,
    badge: "Mind Athlete",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Who needs a calculator? 15-year-old math athlete Aaryan Shukla can add 100 giant numbers together in his head in just 30 seconds! He treats math like a fun sport and says anyone can train their brain to be fast!",
        content: `How fast can you add 2 + 2? Four! Easy peasy!

Now imagine someone flashing 100 giant four-digit numbers on a computer screen—faster than you can blink—and asking you to add them all up in your head!

15-year-old math champion Aaryan Shukla just set a mind-boggling world record. He added 100 four-digit numbers in his brain in just 30.9 seconds! That is faster than an adult can punch the numbers into a smartphone calculator!

Aaryan doesn't just do math for contests; he travels to schools to teach kids that our brains are like muscles. The more you exercise them with fun puzzles, the stronger and faster they become!`
      },
      curious: {
        summary: "Guinness World Record holder Aaryan Shukla demonstrated the power of mental athletics by summing 100 four-digit integers in 30.9 seconds, championing mental math as an exciting global esport.",
        content: `Just as Olympic sprinters train their leg muscles for explosive speed, 'mental athletes' train their working memory and cognitive speed for mental arithmetic!

During an official Guinness World Records trial in Milan, Italy, 15-year-old Aaryan Shukla took the stage. A digital screen flashed 100 different four-digit numbers (like 7,492 + 1,839 + 6,401...) one after another in less than half a second each.

Without using pencil, paper, or an abacus, Aaryan calculated the massive total in his mind and announced the exact answer in 30.9 seconds.

Aaryan began practicing with a mental abacus when he was only six years old. He now helps run youth STEM workshops, inspiring thousands of students to see numbers as a creative playground rather than a stressful test.`
      },
      junior: {
        summary: "Displaying unprecedented cognitive processing velocity and working memory capacity, 15-year-old mental calculation champion Aaryan Shukla achieved a verified addition rate of over 3.2 operations per second.",
        content: `Mental calculation at elite levels requires extreme synchronization of neural circuits responsible for spatial-numerical association (SNARC) and rapid visuospatial scratchpad manipulation.

Aaryan Shukla's record-setting performance of summing 100 four-digit numbers in 30.9 seconds represents an average processing cadence of 309 milliseconds per addition. Cognitive scientists attribute this extraordinary throughput to advanced Soroban (mental abacus) visualization techniques.

By encoding numerical digits into dynamic mental bead positions rather than phonological verbal loops, practitioners bypass linguistic processing bottlenecks, enabling direct parallel computational operations across the parietal lobes.`
      }
    },
    didYouKnow: "Your brain contains approximately 86 billion neurons, and every time you learn a new game, math trick, or sport, your brain creates brand new physical connections!",
    wordDetective: [
      { word: "Arithmetic", pronunciation: "uh-RITH-muh-tik", meaning: "The branch of mathematics dealing with counting, adding, subtracting, multiplying, and dividing numbers." },
      { word: "Cognitive", pronunciation: "KOG-nih-tiv", meaning: "Anything related to conscious mental activities like thinking, reasoning, remembering, and learning." },
      { word: "Abacus", pronunciation: "AB-uh-kus", meaning: "An ancient calculating frame with colorful sliding beads that helps people calculate with lightning speed!" }
    ],
    quiz: {
      question: "How long did it take Aaryan to add 100 four-digit numbers in his head?",
      options: ["3 hours", "Just 30.9 seconds", "2 days", "15 minutes"],
      correctIndex: 1,
      explanation: "In an official world record test, Aaryan computed all 100 numbers in his brain in an astonishing 30.9 seconds—faster than typing on a calculator!"
    },
    reactions: { thumbsUp: 135, heart: 98, wow: 195, laugh: 3 }
  },

  // 6. WACKY & FUN - LATEST DISCOVERY
  {
    id: "wacky-bats-move-eyes",
    title: "Scientists Stunned to Discover Bats Can Move Their Eyes After 80 Years of Thinking They Couldn't!",
    slug: "bats-move-their-eyes-discovery",
    isFeatured: false,
    difficulty: "starter",
    difficultyLabel: "⭐ Starter Tier",
    category: "wacky",
    categoryLabel: "Wacky & Fun",
    categoryEmoji: "🐸",
    bannerEmoji: "🦇",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    readTime: "2 min read",
    audioTime: "1:20",
    date: "Biology Mythbusters",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <radialGradient id="nightCaveGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#2c3e50"/>
          <stop offset="100%" stop-color="#0c1017"/>
        </radialGradient>
      </defs>
      <rect width="600" height="320" fill="url(#nightCaveGrad)" rx="24"/>
      <!-- Cave Stalactites -->
      <polygon points="40,0 60,60 80,0" fill="#34495e"/>
      <polygon points="120,0 140,80 160,0" fill="#34495e"/>
      <polygon points="440,0 460,70 480,0" fill="#34495e"/>
      <!-- Sound waves (Echolocation) -->
      <path d="M230,130 Q170,120 150,90" stroke="#00d2d3" stroke-width="3" fill="none" opacity="0.6"/>
      <path d="M220,140 Q150,130 130,95" stroke="#00d2d3" stroke-width="3" fill="none" opacity="0.4"/>
      <!-- Cute Bat hanging upside down and moving eyes! -->
      <g transform="translate(260, 60)">
        <!-- Feet gripping ceiling -->
        <line x1="30" y1="0" x2="30" y2="25" stroke="#7f8c8d" stroke-width="4"/>
        <line x1="50" y1="0" x2="50" y2="25" stroke="#7f8c8d" stroke-width="4"/>
        <!-- Furry Bat Body -->
        <ellipse cx="40" cy="70" rx="35" ry="45" fill="#4b4b4b"/>
        <!-- Big Ears -->
        <polygon points="10,40 -5,8 25,30" fill="#5758bb"/>
        <polygon points="70,40 85,8 55,30" fill="#5758bb"/>
        <!-- Wrapped Wings -->
        <path d="M5,45 Q-20,90 25,115 Z" fill="#2d3436"/>
        <path d="M75,45 Q100,90 55,115 Z" fill="#2d3436"/>
        <!-- Big Googly Expressive Eyes Moving to the Left! -->
        <circle cx="28" cy="72" r="13" fill="#fff"/>
        <circle cx="23" cy="72" r="6" fill="#111"/> <!-- Looking left -->
        <circle cx="52" cy="72" r="13" fill="#fff"/>
        <circle cx="47" cy="72" r="6" fill="#111"/> <!-- Looking left -->
        <!-- Cute Little Bat Nose and Fangs -->
        <polygon points="38,88 42,88 40,92" fill="#ff7675"/>
        <polygon points="34,96 36,102 38,96" fill="#fff"/>
        <polygon points="42,96 44,102 46,96" fill="#fff"/>
      </g>
      <!-- Tiny moth fluttering by -->
      <g transform="translate(130, 160)">
        <ellipse cx="10" cy="10" rx="4" ry="7" fill="#f1c40f"/>
        <circle cx="5" cy="6" r="6" fill="#f39c12" opacity="0.8"/>
        <circle cx="15" cy="6" r="6" fill="#f39c12" opacity="0.8"/>
      </g>
      <text x="145" y="150" font-size="20">👀 🦋</text>
    </svg>`,
    badge: "Myth Busters",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "For over 80 years, science books told everyone that bats couldn't move their eyes at all. But brand-new cameras caught bats darting their eyes side-to-side to watch juicy moths fly by!",
        content: `Close your eyes and move them left and right. You can look at your shoes, then look up at the ceiling, without even moving your head!

For nearly a century, scientists believed bats couldn't do that. Because bats use super-hearing called echolocation to 'see' with sound waves, old books claimed their eyeballs were locked in place like statues!

Well, guess what? The science books were WRONG!

High-speed cameras watched fruit bats resting in caves and discovered that bats move their eyes all the time! When a moth flutters nearby, the bat tracks it with its eyes, combining super-vision with super-hearing!`
      },
      curious: {
        summary: "A breakthrough neurobiology study revealed that Seba's short-tailed bats actively coordinate eye saccades with echolocation pulses, overturning an 80-year-old biological assumption that bats have immobile eyes.",
        content: `In science, whenever someone says 'everyone knows that's impossible,' a curious researcher usually comes along and proves everyone wrong!

Since the 1940s, textbooks asserted that echolocating bats had fixed, immobile eyes in their skulls because sound navigation made eye movements redundant.

However, an international team of sensory biologists placed non-invasive eye-tracking cameras on fruit bats. To their astonishment, the bats demonstrated rapid, voluntary eye movements called **saccades**—moving their eyes up to 30 degrees to scan the dark!

Even cooler: the bats synchronized their eye darts with their high-pitched sonar chirps. This proves bats don't choose between sight and sound; they fuse both senses together like high-tech jet fighter helmets!`
      },
      junior: {
        summary: "Oculomotor tracking in Carollia perspicillata reveals active saccadic eye movements phase-locked with biosonar emissions, falsifying long-standing paradigms regarding chiropteran cranial ocular immobility.",
        content: `Since initial physiological investigations in 1944, the prevailing scientific consensus maintained that microbats possessed vestigial oculomotor functionality, relying exclusively on auditory feedback for spatial navigation.

Recent high-speed infrared video-oculography on Seba's short-tailed bats (Carollia perspicillata) demonstrated robust horizontal and vertical saccades possessing peak angular velocities exceeding 300°/s.

Crucially, electrophysiological recordings revealed that ocular saccades are temporally coordinated with laryngeal echolocation pulse trains. This multi-sensory integration confirms that chiropteran target tracking utilizes active visual foveation in concert with auditory acoustic imaging, revolutionizing our comprehension of mammalian sensory ecology.`
      }
    },
    didYouKnow: "Bats are the only mammals on planet Earth capable of true, powered flight! Flying squirrels don't truly fly—they only glide like parachutes.",
    wordDetective: [
      { word: "Echolocation", pronunciation: "ek-oh-loh-KAY-shun", meaning: "Navigating and finding hidden objects by bouncing high-pitched sound waves off them." },
      { word: "Saccade", pronunciation: "suh-KAHD", meaning: "A super-fast, darting jump that your eyes make when tracking something in motion." },
      { word: "Chiroptera", pronunciation: "kye-ROP-ter-uh", meaning: "The scientific mammal family name for bats, which literally means 'hand-wing'!" }
    ],
    quiz: {
      question: "What did new cameras discover about bat eyes that surprised scientists?",
      options: ["Bats glow in the dark", "Bats actually can move their eyes to track bugs, proving old books wrong!", "Bats have four eyes", "Bats close their eyes when flying backwards"],
      correctIndex: 1,
      explanation: "For over 80 years, scientists thought bat eyes were locked in place, but modern cameras proved bats actively dart and move their eyes to track food!"
    },
    reactions: { thumbsUp: 76, heart: 122, wow: 164, laugh: 58 }
  }
];

// Daily Wonder Poll - Fresh interactive question!
const DAILY_POLL = {
  id: "poll-latest-2026",
  question: "If you could invent any nature-inspired robot, which superpower would you give it?",
  options: [
    { id: "puffin", label: "🤿 Fly through storm clouds & dive underwater like a Robo-Puffin", emoji: "🤿", votes: 198 },
    { id: "octopus", label: "🐙 Change into invisible camouflage colors like an Octopus", emoji: "🐙", votes: 245 },
    { id: "calculator", label: "🧠 Solve 100 math problems in 30 seconds like Aaryan", emoji: "🧠", votes: 162 },
    { id: "bat", label: "🦇 Fly silently in pitch black caves with sonar radar", emoji: "🦇", votes: 210 }
  ]
};

// Daily Brain Teaser / Riddle - Fresh Riddle!
const DAILY_RIDDLE = {
  riddle: "I have no wings, but I can fly across the sky. I have no eyes, but I can cry tears of rain. When I cover the sun, twilight falls. What am I?",
  hint: "NASA's Curiosity rover just photographed glowing ones on Mars!",
  answer: "A Cloud! ☁️"
};

// Mascot Tips & Friendly Greetings - Fresh curiosity sparks!
const MASCOT_MESSAGES = [
  "Hi Explorer! I'm Barnaby Bear! Check out the sunset clouds on Mars—they glow like rainbow pearls! 🪐",
  "Did you know octopuses have sweet dreams and change colors while sleeping? 🐙",
  "Robots can now fly like puffins and dive into coral reefs! The future is wild! 🤖",
  "You can train your brain just like an Olympic athlete trains their muscles! 🧠",
  "Scientists discovered bats can move their eyes—proving there's always something new to learn! 🦇",
  "Try Bedtime Mode at night for sweet dreams under the twinkling stars! 🌙"
];
