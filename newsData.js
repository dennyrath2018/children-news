// News stories and interactive learning database for WonderSparks News
const NEWS_ARTICLES = [
  {
    id: "space-water-moon",
    title: "Scientists Spot Mystery Water Caves on the Moon!",
    slug: "moon-water-caves",
    category: "space",
    categoryLabel: "Space & Science",
    categoryEmoji: "🚀",
    bannerEmoji: "🌕",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    readTime: "3 min read",
    date: "Today's Feature",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <radialGradient id="spaceGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#1f2456" />
          <stop offset="100%" stop-color="#0b0e27" />
        </radialGradient>
        <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fff8db" />
          <stop offset="70%" stop-color="#ffd56b" />
          <stop offset="100%" stop-color="#e09c3d" />
        </radialGradient>
      </defs>
      <rect width="600" height="320" fill="url(#spaceGrad)" rx="16"/>
      <!-- Stars -->
      <circle cx="80" cy="50" r="2.5" fill="#fff" opacity="0.8"/>
      <circle cx="140" cy="90" r="1.5" fill="#ffd56b" opacity="0.9"/>
      <circle cx="220" cy="40" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="340" cy="80" r="3" fill="#fff" opacity="0.9"/>
      <circle cx="480" cy="60" r="2" fill="#8bf" opacity="0.9"/>
      <circle cx="530" cy="110" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="90" cy="220" r="2" fill="#fff" opacity="0.7"/>
      <!-- Moon -->
      <circle cx="430" cy="130" r="85" fill="url(#moonGlow)"/>
      <circle cx="395" cy="110" r="15" fill="#dba135" opacity="0.35"/>
      <circle cx="455" cy="155" r="22" fill="#dba135" opacity="0.3"/>
      <circle cx="440" cy="95" r="11" fill="#dba135" opacity="0.25"/>
      <!-- Moon Cave Entrance -->
      <ellipse cx="410" cy="140" rx="16" ry="24" fill="#382104" opacity="0.7"/>
      <path d="M400,135 Q410,125 418,140 Q410,155 402,145 Z" fill="#6fe3ff" opacity="0.75"/>
      <!-- Astronaut Rover -->
      <rect x="130" y="220" width="120" height="50" rx="14" fill="#ffffff"/>
      <rect x="145" y="200" width="70" height="24" rx="8" fill="#7ed6df"/>
      <circle cx="150" cy="270" r="16" fill="#333" stroke="#ffd56b" stroke-width="4"/>
      <circle cx="190" cy="270" r="16" fill="#333" stroke="#ffd56b" stroke-width="4"/>
      <circle cx="230" cy="270" r="16" fill="#333" stroke="#ffd56b" stroke-width="4"/>
      <!-- Little flag -->
      <line x1="240" y1="220" x2="240" y2="175" stroke="#fff" stroke-width="3"/>
      <polygon points="240,175 275,188 240,200" fill="#ff4757"/>
      <!-- Cute Alien Peeking -->
      <circle cx="300" cy="245" r="18" fill="#2ed573"/>
      <circle cx="294" cy="242" r="3.5" fill="#111"/>
      <circle cx="306" cy="242" r="3.5" fill="#111"/>
      <line x1="300" y1="227" x2="300" y2="218" stroke="#2ed573" stroke-width="3"/>
      <circle cx="300" cy="216" r="4" fill="#ff4757"/>
    </svg>`,
    badge: "Space Expedition",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Space robots found cozy deep caves on the Moon! Inside, there might be super cold ice that future astronauts could drink!",
        content: `Have you ever built a secret pillow fort in your living room? 
        
Astronomers believe astronauts might build real forts on the Moon inside secret caves!

A spacecraft flying around the Moon took special radar pictures and found giant underground tunnels. Deep down in these dark tunnels, temperatures stay nice and cool, protected from dangerous cosmic rays and burning hot sun rays.

Even cooler? Scientists spotted frosty glimmers that might be frozen water! Future kids who travel to space could melt this ice for drinking water and even turn it into rocket fuel!`
      },
      curious: {
        summary: "Astronomers have mapped subterranean lava tubes on the Moon with radar. These deep pits could host future astronaut bases and protect them from extreme space weather!",
        content: `Imagine living on the Moon. During lunar daytime, the surface bakes at an astonishing 120°C (250°F), hot enough to boil water! But at night, it plummets to -130°C (-200°F). How could humans ever build a base there?

The answer might lie underground! Scientists analyzing radar data from the Lunar Reconnaissance Orbiter discovered cavernous conduits called **lava tubes**. These tunnels were carved out billions of years ago when glowing volcanic rivers flowed on the lunar surface.

These natural subterranean caverns maintain a cozy, steady temperature around 17°C (63°F)—just like a comfortable spring afternoon on Earth! Even better, they act as natural radiation shields against harsh cosmic rays and falling space pebbles.

In the deepest shadows where sunlight never hits, scientists also detected signs of water ice deposits. That means future explorers could pump up water to drink, grow lunar veggies, and split into oxygen to breathe!`
      },
      junior: {
        summary: "Radar sounding data confirms the existence of a cavernous conduit beneath the Mare Tranquillitatis pit on the Moon, offering an optimal site for radiation-shielded lunar habitats.",
        content: `In a landmark study published in astrophysics, researchers utilizing miniature radio frequency radar data from NASA's Lunar Reconnaissance Orbiter (LRO) successfully confirmed an accessible subterranean cavity extending from the Mare Tranquillitatis pit.

The cave is estimated to be at least 45 meters wide and up to 80 meters long, formed from ancient volcanic lava flows during the Moon's geologically active epoch. The structural integrity of these basaltic ceilings provides critical shielding against two lethal perils of lunar habitation: high-energy galactic cosmic radiation and micrometeoroid bombardment.

Crucially, thermal modeling indicates the subsurface temperature remains thermally stable at approximately 17°C, circumventing the extreme ±130°C surface temperature swings. Furthermore, proximity to permanently shadowed craters implies trapped volatile deposits—notably H2O ice—which can be harvested through in-situ resource utilization (ISRU) for life support and propellant synthesis.`
      }
    },
    didYouKnow: "A full day and night on the Moon lasts nearly 29.5 Earth days! That means almost two whole weeks of sunlight followed by two weeks of darkness.",
    wordDetective: [
      { word: "Lava Tube", pronunciation: "LAH-vuh toob", meaning: "A hollow tunnel left behind when underground molten rock drains away." },
      { word: "Subterranean", pronunciation: "sub-tuh-RAY-nee-un", meaning: "Existing or happening completely underground!" },
      { word: "Radiation", pronunciation: "ray-dee-AY-shun", meaning: "Invisible energy waves from the sun and stars that space suits protect us against." }
    ],
    quiz: {
      question: "What temperature is it inside the deep Moon caves?",
      options: ["Boiling hot like soup", "Around 17°C (63°F) - like a spring day!", "Freezing colder than Antarctica", "Hot enough to melt rocks"],
      correctIndex: 1,
      explanation: "Because the caves are deep underground, they stay at a comfortable 17°C (63°F), shielding astronauts from the burning heat and freezing cold above!"
    },
    reactions: { thumbsUp: 42, heart: 89, wow: 114, laugh: 5 }
  },
  {
    id: "animals-panda-twins",
    title: "Twin Baby Red Pandas Take Their First Wobbly Tree Steps!",
    slug: "twin-baby-red-pandas",
    category: "animals",
    categoryLabel: "Animals & Nature",
    categoryEmoji: "🐾",
    bannerEmoji: "🐼",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
    readTime: "2 min read",
    date: "Trending Cute",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="forestGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#bbf2c4"/>
          <stop offset="100%" stop-color="#38ada9"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#forestGrad)" rx="16"/>
      <!-- Big Tree Branch -->
      <path d="M-10,260 Q180,240 320,180 T610,160 L610,320 L-10,320 Z" fill="#795548"/>
      <!-- Leaves -->
      <circle cx="80" cy="180" r="45" fill="#2ed573" opacity="0.85"/>
      <circle cx="130" cy="150" r="55" fill="#10ac84" opacity="0.9"/>
      <circle cx="500" cy="110" r="60" fill="#2ed573" opacity="0.9"/>
      <circle cx="560" cy="140" r="50" fill="#1dd1a1" opacity="0.8"/>
      <!-- Baby Panda 1 -->
      <g transform="translate(210, 115)">
        <!-- Tail -->
        <path d="M-10,40 Q-40,60 -60,40 Q-50,25 -20,28 Z" fill="#eb4d4b"/>
        <line x1="-30" y1="38" x2="-25" y2="48" stroke="#f0932b" stroke-width="4"/>
        <line x1="-45" y1="36" x2="-40" y2="44" stroke="#f0932b" stroke-width="4"/>
        <!-- Body -->
        <ellipse cx="25" cy="35" rx="32" ry="24" fill="#eb4d4b"/>
        <!-- Ears -->
        <polygon points="10,0 20,-18 30,-2" fill="#fff"/>
        <polygon points="40,-2 50,-18 60,0" fill="#fff"/>
        <!-- Head -->
        <circle cx="35" cy="12" r="24" fill="#eb4d4b"/>
        <ellipse cx="35" cy="18" rx="14" ry="10" fill="#fff"/>
        <!-- Eyes & Nose -->
        <circle cx="28" cy="12" r="3.5" fill="#222"/>
        <circle cx="42" cy="12" r="3.5" fill="#222"/>
        <polygon points="35,16 31,19 39,19" fill="#111"/>
        <!-- Cute cheek blushes -->
        <circle cx="22" cy="18" r="4" fill="#ff7979" opacity="0.6"/>
        <circle cx="48" cy="18" r="4" fill="#ff7979" opacity="0.6"/>
        <!-- Paws holding branch -->
        <circle cx="18" cy="50" r="8" fill="#333"/>
        <circle cx="45" cy="50" r="8" fill="#333"/>
      </g>
      <!-- Baby Panda 2 (peeking) -->
      <g transform="translate(370, 95)">
        <ellipse cx="20" cy="30" rx="26" ry="20" fill="#eb4d4b"/>
        <polygon points="8,4 16,-12 24,2" fill="#fff"/>
        <polygon points="32,2 40,-12 48,4" fill="#fff"/>
        <circle cx="28" cy="14" r="20" fill="#eb4d4b"/>
        <ellipse cx="28" cy="19" rx="12" ry="8" fill="#fff"/>
        <circle cx="22" cy="14" r="3" fill="#222"/>
        <circle cx="34" cy="14" r="3" fill="#222"/>
        <polygon points="28,18 25,20 31,20" fill="#111"/>
        <!-- Sparkling stars -->
        <text x="55" y="10" font-size="20">✨</text>
      </g>
    </svg>`,
    badge: "Wildlife Wonder",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Two adorable red panda cubs named Mochi and Peanut just stepped out of their cozy den for the very first time. They have fluffy striped tails and love munching sweet bamboo leaves!",
        content: `Get ready for cuteness overload! 

At an animal sanctuary nestled high in the misty green mountains, two tiny red panda cubs named Mochi and Peanut have made their big world debut!

When they were born three months ago, they were no bigger than an apple. Their mom, Sakura, kept them tucked inside a hollow log nest filled with soft dried leaves.

Today, Peanut peeked his fluffy nose out first. He gave a tiny sneeze, stretched his ringed tail, and cautiously climbed onto a mossy tree branch. Sister Mochi followed right behind him, rolling over like a furry red bowling ball! Red pandas use their bushy striped tails like acrobats use tightrope poles—to keep their balance!`
      },
      curious: {
        summary: "Born three months ago, two endangered red panda cubs in the Himalayan foothills have taken their first outdoor climbs. Red pandas possess a unique 'false thumb' that helps them grip bamboo!",
        content: `Two red panda cubs, Peanut and Mochi, have taken their very first steps into the outdoor canopy, delighting zoologists and wildlife lovers worldwide.

Red pandas are not closely related to black-and-white giant pandas—in fact, they are in a biological family all of their own, closer to raccoons and weasels. They are about the size of a domestic housecat, but with a magnificent, thick fur coat that protects them from Himalayan blizzards.

One of their coolest superpowers is an extra 'false thumb'! It is actually an enlarged wrist bone that allows red pandas to grasp slippery bamboo stalks with surgical precision. 

Conservationists report that both cubs are climbing skillfully and learning how to forage. Since fewer than 10,000 red pandas remain in the wild, the healthy birth of twin cubs is a giant win for global biodiversity!`
      },
      junior: {
        summary: "Twin cubs of the endangered Ailurus fulgens (red panda) have begun canopy locomotion trials, marking a milestone for international captive breeding and conservation initiatives.",
        content: `Zookeepers and conservation biologists have recorded the first successful arboreal excursions of twin red panda cubs (Ailurus fulgens), a species classified as Endangered on the IUCN Red List.

Arboreal mammals require highly coordinated motor reflexes and prehensile adaptations. Red pandas uniquely possess a modified radial sesamoid bone—often termed a 'pseudo-thumb'—which acts antagonistically against their other five digits to clamp onto narrow branches and bamboo culms.

Additionally, red pandas possess flexible ankles that can rotate 180 degrees, allowing them to descend tree trunks headfirst with remarkable dexterity. Because habitat fragmentation throughout Nepal, Bhutan, and southwestern China threatens wild populations, genetic diversity programs in conservation centers are indispensable for future rewilding projects.`
      }
    },
    didYouKnow: "Red pandas wrap their long, bushy tails around their faces like a cozy winter scarf when they sleep in snowy trees!",
    wordDetective: [
      { word: "Arboreal", pronunciation: "ar-BOR-ee-ul", meaning: "Animals that spend most of their lives living and playing up in trees." },
      { word: "Biodiversity", pronunciation: "bye-oh-dy-VER-sih-tee", meaning: "The incredible variety of all living animals, plants, and critters on Earth." },
      { word: "Pseudo-thumb", pronunciation: "SOO-doh thumb", meaning: "A special wrist bone that acts just like an extra thumb for gripping things." }
    ],
    quiz: {
      question: "How do red pandas use their big bushy tails when walking on branches?",
      options: ["As a parachute", "Like an acrobat's balancing pole", "To wave hello to birds", "To tickle their friends"],
      correctIndex: 1,
      explanation: "Their heavy, striped tail provides counter-balance so they can walk across skinny branches high above the ground without tumbling!"
    },
    reactions: { thumbsUp: 95, heart: 160, wow: 38, laugh: 12 }
  },
  {
    id: "tech-flying-cleaning-drone",
    title: "12-Year-Old Inventions Club Builds Ocean-Cleaning Solar Drone!",
    slug: "ocean-cleaning-drone",
    category: "tech",
    categoryLabel: "Inventions & Tech",
    categoryEmoji: "⚡",
    bannerEmoji: "🤖",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    readTime: "3 min read",
    date: "Kid Innovator",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#48dbfb"/>
          <stop offset="60%" stop-color="#0abde3"/>
          <stop offset="100%" stop-color="#10ac84"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#oceanGrad)" rx="16"/>
      <!-- Sun -->
      <circle cx="500" cy="60" r="35" fill="#feca57"/>
      <!-- Waves -->
      <path d="M0,230 Q70,210 140,230 T280,230 T420,230 T560,230 L600,230 L600,320 L0,320 Z" fill="#006266" opacity="0.4"/>
      <path d="M0,250 Q60,235 120,250 T240,250 T360,250 T480,250 T600,250 L600,320 L0,320 Z" fill="#009432" opacity="0.25"/>
      <!-- Friendly Turtle -->
      <g transform="translate(80, 240)">
        <ellipse cx="30" cy="20" rx="25" ry="16" fill="#1dd1a1"/>
        <circle cx="60" cy="18" r="8" fill="#10ac84"/>
        <circle cx="62" cy="16" r="1.5" fill="#111"/>
        <!-- Flippers -->
        <ellipse cx="25" cy="8" rx="14" ry="6" fill="#10ac84" transform="rotate(-20 25 8)"/>
        <ellipse cx="25" cy="32" rx="14" ry="6" fill="#10ac84" transform="rotate(20 25 32)"/>
      </g>
      <!-- Solar Catamaran Drone -->
      <g transform="translate(240, 140)">
        <!-- Floats -->
        <rect x="0" y="55" width="130" height="18" rx="8" fill="#ff6b6b"/>
        <rect x="0" y="85" width="130" height="18" rx="8" fill="#ff6b6b"/>
        <!-- Deck -->
        <rect x="25" y="45" width="80" height="45" rx="6" fill="#f1f2f6"/>
        <!-- Solar Panels (Blue Grid) -->
        <rect x="30" y="50" width="70" height="35" rx="4" fill="#2e86de"/>
        <line x1="30" y1="67" x2="100" y2="67" stroke="#fff" stroke-width="1.5"/>
        <line x1="53" y1="50" x2="53" y2="85" stroke="#fff" stroke-width="1.5"/>
        <line x1="76" y1="50" x2="76" y2="85" stroke="#fff" stroke-width="1.5"/>
        <!-- Camera Eye / Sensor -->
        <circle cx="115" cy="64" r="8" fill="#333"/>
        <circle cx="116" cy="63" r="3" fill="#00d2d3"/>
        <!-- Front Scooper Net -->
        <polygon points="120,60 160,50 160,80 120,70" fill="#ffd32a" opacity="0.8" stroke="#ffa801" stroke-width="2"/>
        <!-- Propeller splash -->
        <path d="M-5,65 Q-20,60 -15,75" stroke="#fff" stroke-width="3" fill="none"/>
      </g>
    </svg>`,
    badge: "Kid Inventor Spotlight",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "A team of middle schoolers built a floating robot boat powered by sunshine! The robot scoots across harbors gobbling up plastic trash to keep turtles safe.",
        content: `Who says you need a college degree to be an inventor?

Four seventh-graders in Maine loved going swimming at their local marina, but they hated seeing soda bottle caps and snack wrappers floating in the water.

Instead of just feeling sad, they used their school's robotics club to build **Bubble-Bot 3000**! 

Bubble-Bot is a miniature boat with two yellow pontoons and shiny blue solar panels on top. As it glides across the water powered purely by the sun, its rotating front scoop gently captures floating plastic debris and dumps it into a recycled mesh basket. The local sea turtles and ducks are already swimming much happier!`
      },
      curious: {
        summary: "Seventh-grade students engineered an autonomous solar-powered catamaran called Bubble-Bot. Using an inexpensive microcomputer and camera AI, it detects floating ocean trash and scoops it up!",
        content: `In an inspiring display of young engineering, four 12-year-old students created an autonomous floating drone designed to clear plastic litter from harbors and canals.

The vessel, named Bubble-Bot, is built on a lightweight catamaran hull made from recycled plastic pipes. It runs on dual electric thrusters energized by a 40-watt rooftop solar panel and rechargeable lithium-iron batteries.

To steer toward trash without bumping into ducks or boats, the kids programmed a Raspberry Pi computer with a basic computer vision camera. When the camera spots a floating bottle or bag, the drone steers right towards it and activates a slow-moving conveyor mesh.

In their first harbor test, the kids' robot collected over 35 pounds of trash in just two afternoons! Several coastal towns have already reached out to help the students build more units for summer beaches.`
      },
      junior: {
        summary: "A middle school STEM initiative produced an autonomous, solar-powered catamaran utilizing edge-based machine learning for real-time marine debris identification and collection.",
        content: `Addressing coastal microplastic contamination at its source, four seventh-grade student engineers engineered an autonomous surface vessel (ASV) equipped with edge computing capabilities.

The catamaran platform integrates twin pontoon hulls with a balanced brushless DC propulsion array. It utilizes a solar photovoltaic array coupled to a battery management system (BMS), ensuring continuous operation through ambient energy harvesting.

The vessel's navigational autonomy relies on a custom OpenCV neural network running on an embedded single-board computer. The model was trained on thousands of harbor imagery sets to classify plastic polymers versus marine fauna, preventing inadvertent interactions with local wildlife. Once locked on debris, a conveyor scooper directs refuse into an internal retrieval hopper with zero emissions.`
      }
    },
    didYouKnow: "Over 80% of ocean plastic enters waterways from dry land via rivers and storm drains, which means stopping it near harbors makes a huge difference!",
    wordDetective: [
      { word: "Catamaran", pronunciation: "kat-uh-muh-RAN", meaning: "A fast, stable boat that has two parallel floating hulls instead of one." },
      { word: "Autonomous", pronunciation: "aw-TAHN-uh-mus", meaning: "Able to move, navigate, or make decisions on its own without a human remote control." },
      { word: "Photovoltaic", pronunciation: "foh-toh-vol-TAY-ik", meaning: "Turning rays of sunshine directly into clean electrical power!" }
    ],
    quiz: {
      question: "How does the kid-made robot get its energy to move?",
      options: ["Diesel gas engine", "Wound-up rubber bands", "Solar panels soaking up sunshine", "Plugging in a 10-mile extension cord"],
      correctIndex: 2,
      explanation: "Bubble-Bot has rooftop solar panels that capture sunlight, meaning it produces zero air pollution while cleaning the sea!"
    },
    reactions: { thumbsUp: 120, heart: 145, wow: 88, laugh: 3 }
  },
  {
    id: "earth-t-rex-feathers",
    title: "Baby T-Rex Fossils Suggest They Looked Like Giant Fluffy Chicks!",
    slug: "fluffy-t-rex-fossils",
    category: "earth",
    categoryLabel: "Dino Digs & History",
    categoryEmoji: "🦖",
    bannerEmoji: "🦕",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    readTime: "3 min read",
    date: "Paleo News",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="dinoGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdcb6e"/>
          <stop offset="100%" stop-color="#e17055"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#dinoGrad)" rx="16"/>
      <!-- Prehistoric Ferns -->
      <path d="M40,320 Q60,220 20,180 Q80,210 110,320 Z" fill="#2d3436" opacity="0.3"/>
      <path d="M500,320 Q480,200 540,160 Q490,210 460,320 Z" fill="#2d3436" opacity="0.3"/>
      <!-- Baby T-Rex (Fluffy & Cute!) -->
      <g transform="translate(230, 90)">
        <!-- Fluffy Body -->
        <circle cx="70" cy="90" r="50" fill="#f39c12"/>
        <path d="M60,40 Q90,30 110,60 Q80,70 60,40 Z" fill="#e67e22"/>
        <!-- Fluffy tufts -->
        <circle cx="40" cy="70" r="15" fill="#f1c40f"/>
        <circle cx="50" cy="110" r="16" fill="#f1c40f"/>
        <circle cx="95" cy="115" r="14" fill="#f1c40f"/>
        <!-- Tail -->
        <path d="M25,100 Q-15,110 -30,80 Q-5,85 20,90 Z" fill="#e67e22"/>
        <!-- Head -->
        <ellipse cx="120" cy="65" rx="36" ry="28" fill="#f39c12"/>
        <!-- Open Snout with tiny teeth -->
        <path d="M135,60 L165,65 L135,78 Z" fill="#e67e22"/>
        <polygon points="140,65 145,70 148,65" fill="#fff"/>
        <polygon points="150,66 155,71 158,66" fill="#fff"/>
        <!-- Big curious eye -->
        <circle cx="125" cy="55" r="10" fill="#fff"/>
        <circle cx="127" cy="55" r="6" fill="#2d3436"/>
        <circle cx="129" cy="53" r="2.5" fill="#fff"/>
        <!-- Tiny dino arms -->
        <path d="M100,95 Q115,100 110,110" stroke="#d35400" stroke-width="6" stroke-linecap="round" fill="none"/>
        <!-- Feet -->
        <path d="M65,135 L65,170 L50,175 M65,170 L80,175" stroke="#d35400" stroke-width="7" stroke-linecap="round" fill="none"/>
        <path d="M95,135 L105,170 L95,175 M105,170 L120,175" stroke="#d35400" stroke-width="7" stroke-linecap="round" fill="none"/>
        <!-- Eggshell fragments nearby -->
        <polygon points="-10,170 15,150 20,180" fill="#fff" opacity="0.8"/>
        <polygon points="130,170 150,155 160,180" fill="#fff" opacity="0.8"/>
      </g>
    </svg>`,
    badge: "Fossil Discovery",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Did you know that when the terrifying Tyrannosaurus Rex hatched from its egg, it wasn't scaly at all? It was covered in soft, fuzzy down feathers, just like a golden baby duckling!",
        content: `When you think of a T-Rex, you probably picture a giant, roaring green monster with huge scaly teeth.

But fossil hunters have uncovered surprising clues! When a baby T-Rex first cracked out of its egg, it was no bigger than a turkey—and covered from head to toe in soft, fluffy peach fuzz feathers!

Why did they need feathers? Because baby dinosaurs were warm-blooded! Deep inside prehistoric forests, night temperatures would drop quickly, and the baby dinos couldn't make enough heat on their own. Their downy fluff kept them snug as a bug!`
      },
      curious: {
        summary: "Paleontologists studying exceptionally preserved theropod fossils in Montana have reconstructed juvenile T-Rexes with coats of dense plumulaceous feathers, proving close links between dinosaurs and modern birds.",
        content: `Close your eyes and imagine a baby Tyrannosaurus rex. If you pictured a fierce, scaly lizard, paleontologists have news for you: it probably looked far more like an overgrown, fluffy chick!

Recent discoveries of closely related tyrannosauroids in China and North America have revealed direct imprints of primitive feathers, called **proto-feathers**. 

When T-Rex hatchlings emerged from their 18-inch eggs, they were vulnerable, slender, and weighed only about 10 to 15 pounds. Lacking the massive thermal mass of a 9-ton adult, hatchlings relied on a thick coat of downy proto-feathers for thermoregulation. 

As they grew into gargantuan adult predators over 20 years, they likely shed much of this feather coat because their immense bodies generated plenty of internal heat!`
      },
      junior: {
        summary: "Phylogenetic analysis of tyrannosauroid integument specimens underscores that juvenile apex theropods expressed filamentous proto-feathers for metabolic homeostasis before ontogenetic changes led to scale retention in mature specimens.",
        content: `The paradigm of the scaly Tyrannosaurus rex has undergone profound revision in modern vertebrate paleontology. While mature adult skin impressions exhibit reticula and small basement scales, juvenile specimens of basal tyrannosauroids (such as Yutyrannus huali and Dilong paradoxus) clearly exhibit branched filamentous integumentary structures.

Thermoregulatory physics dictates that metabolic surface-area-to-volume ratio drops precipitously as an organism scales up in mass. A 6-kilogram hatchling loses heat rapidly to ambient air, necessitating insulating plumulaceous plumage to preserve core body temperature. 

Conversely, an 8,000-kilogram mature Tyrannosaurus would face hyperthermia risks if heavily feathered. Thus, evidence strongly favors an ontogenetic shift: fuzzy down-insulated juveniles that molted down as they grew into titan predators.`
      }
    },
    didYouKnow: "Birds are living theropod dinosaurs! In fact, a robin in your backyard is more closely related to a T-Rex than a T-Rex was to a Stegosaurus!",
    wordDetective: [
      { word: "Paleontologist", pronunciation: "pay-lee-on-TAH-luh-jist", meaning: "A detective scientist who digs up fossils to study creatures from millions of years ago." },
      { word: "Thermoregulation", pronunciation: "ther-moh-reg-yoo-LAY-shun", meaning: "The ability of an animal's body to keep itself at the perfect warm temperature." },
      { word: "Theropod", pronunciation: "THEER-uh-pod", meaning: "A family of two-legged, hollow-boned dinosaurs that includes T-Rex and all modern birds!" }
    ],
    quiz: {
      question: "Why did baby T-Rex dinosaurs have fluffy feathers?",
      options: ["To tickle their dino siblings", "To keep their little bodies warm before they grew big", "To fly up into jungle trees", "To blend in with snowdrifts"],
      correctIndex: 1,
      explanation: "Just like baby chicks, baby dinos had small bodies that lost heat quickly, so their fluffy down feathers worked like a warm fleece jacket!"
    },
    reactions: { thumbsUp: 81, heart: 92, wow: 130, laugh: 15 }
  },
  {
    id: "sports-kid-skate-record",
    title: "10-Year-Old Skater Lands Historic 900-Degree Spin at Summer Games!",
    slug: "kid-skate-record-900",
    category: "sports",
    categoryLabel: "Sports & Action",
    categoryEmoji: "🛹",
    bannerEmoji: "🏆",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    readTime: "2 min read",
    date: "Super Athlete",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="skateGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff9ff3"/>
          <stop offset="100%" stop-color="#54a0ff"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#skateGrad)" rx="16"/>
      <!-- Halfpipe Ramp -->
      <path d="M0,80 Q200,300 300,300 Q400,300 600,80 L600,320 L0,320 Z" fill="#222f3e" opacity="0.6"/>
      <!-- Skater Boy in Mid-Air Spin -->
      <g transform="translate(300, 95) rotate(-15)">
        <!-- Spin swoosh lines -->
        <circle cx="0" cy="0" r="50" stroke="#feca57" stroke-width="4" stroke-dasharray="15 10" fill="none" opacity="0.8"/>
        <!-- Skateboard -->
        <rect x="-45" y="25" width="90" height="12" rx="6" fill="#1dd1a1"/>
        <circle cx="-30" cy="38" r="6" fill="#ff6b6b"/>
        <circle cx="30" cy="38" r="6" fill="#ff6b6b"/>
        <!-- Skater Body -->
        <rect x="-12" y="-15" width="24" height="35" rx="6" fill="#5f27cd"/>
        <!-- Helmet -->
        <circle cx="0" cy="-30" r="16" fill="#ff9f43"/>
        <circle cx="0" cy="-28" r="13" fill="#ffeaa7"/>
        <!-- Goggles -->
        <rect x="-8" y="-32" width="16" height="6" rx="3" fill="#222f3e"/>
        <!-- Arms doing grab trick -->
        <line x1="-10" y1="-8" x2="-35" y2="15" stroke="#ff9f43" stroke-width="6" stroke-linecap="round"/>
        <line x1="10" y1="-8" x2="25" y2="-25" stroke="#ff9f43" stroke-width="6" stroke-linecap="round"/>
      </g>
      <!-- Confetti sparks -->
      <circle cx="180" cy="90" r="4" fill="#ff9ff3"/>
      <circle cx="420" cy="110" r="5" fill="#feca57"/>
      <circle cx="360" cy="50" r="3.5" fill="#1dd1a1"/>
      <circle cx="220" cy="55" r="4" fill="#fff"/>
    </svg>`,
    badge: "World Record",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Whoosh! 10-year-old Mia spun around two and a half times in mid-air on her skateboard and landed smooth as butter. The whole stadium cheered!",
        content: `Hold onto your helmets! 

Ten-year-old skateboard star Mia just made sports history. On a massive halfpipe ramp taller than a two-story house, Mia zoomed down, soared into the sky, and spun like a dizzy top!

She did two and a half full spins in the air—that's 900 degrees of spinning—before landing cleanly on her four wheels. 

When asked her secret, Mia smiled with her braces showing and said: 'Always wear your helmet, eat peanut butter toast, and never give up if you scrape your knee!'`
      },
      curious: {
        summary: "At the Summer Action Sports Games, 10-year-old Mia Kawada became the youngest female skateboarder in history to land a 900 on the vertical vert ramp.",
        content: `Twenty-five years after skateboarding legend Tony Hawk landed the world's first 900-degree spin, a 10-year-old phenom has matched the milestone.

During her final vert run, Mia launched over 11 feet above the lip of the 14-foot ramp. Tucking her knees tightly into her chest to maximize rotational velocity, she executed two and a half complete revolutions before locking her trucks cleanly onto the transition.

The crowd erupted in thunderous applause as fellow competitors ran onto the ramp to lift Mia onto their shoulders.

Mia began skating when she was only four years old at her neighborhood park. She practices gymnastics twice a week to maintain airborne spatial awareness and safety rolling skills!`
      },
      junior: {
        summary: "Demonstrating exceptional angular momentum conservation, 10-year-old vert athlete Mia Kawada successfully executed a 900° aerial transition in competitive vert ramp competition.",
        content: `Executing a 900 requires precise biomechanics and rotational physics. The athlete must generate substantial vertical amplitude to secure sufficient hang time (approximately 1.3 to 1.5 seconds) while initiating torque via upper-body torsion prior to leaving the vert coping.

By pulling her extremities inward toward her center of mass, Mia minimized her rotational inertia, dramatically accelerating her angular velocity. 

Completing two-and-a-half rotations necessitates landing blind in the reverse stance (fakie), requiring immaculate muscle memory to absorb several times body weight in G-force upon vert re-entry. Mia's breakthrough heralds a new era of youth dominance in Olympic action sports.`
      }
    },
    didYouKnow: "A 900-degree spin is equal to turning in a complete circle two and a half times while flying through the air!",
    wordDetective: [
      { word: "Vert Ramp", pronunciation: "VERT ramp", meaning: "A giant U-shaped wooden ramp with completely vertical walls near the top." },
      { word: "Rotational Inertia", pronunciation: "roh-TAY-shun-ul in-UR-shuh", meaning: "The physical rule that tucking your arms and legs close makes you spin much faster!" },
      { word: "Fakie", pronunciation: "FAY-kee", meaning: "Riding a skateboard backwards while facing forward." }
    ],
    quiz: {
      question: "How many full turns are in a 900-degree skateboard spin?",
      options: ["1 turn", "2 and a half turns", "5 turns", "10 turns"],
      correctIndex: 1,
      explanation: "One full turn is 360 degrees. Two full turns are 720 degrees. Add another half turn (180 degrees) and you get 900 degrees!"
    },
    reactions: { thumbsUp: 104, heart: 77, wow: 152, laugh: 6 }
  },
  {
    id: "wacky-singing-toads",
    title: "Musical Mystery: Forest Toads Sing Duets in Perfect Harmony!",
    slug: "musical-frogs-harmony",
    category: "wacky",
    categoryLabel: "Wacky & Fun",
    categoryEmoji: "🐸",
    bannerEmoji: "🎶",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    readTime: "2 min read",
    date: "Wacky Nature",
    heroImage: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
      <defs>
        <linearGradient id="pondGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1dd1a1"/>
          <stop offset="100%" stop-color="#10ac84"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#pondGrad)" rx="16"/>
      <!-- Giant Lilypad -->
      <ellipse cx="300" cy="220" rx="200" ry="60" fill="#006266"/>
      <path d="M300,220 L380,265" stroke="#10ac84" stroke-width="4"/>
      <!-- Frog 1 (Left) -->
      <g transform="translate(180, 140)">
        <ellipse cx="30" cy="35" rx="35" ry="25" fill="#2ed573"/>
        <!-- Eyes -->
        <circle cx="18" cy="15" r="12" fill="#2ed573"/>
        <circle cx="18" cy="13" r="6" fill="#fff"/>
        <circle cx="18" cy="13" r="3" fill="#111"/>
        <circle cx="42" cy="15" r="12" fill="#2ed573"/>
        <circle cx="42" cy="13" r="6" fill="#fff"/>
        <circle cx="42" cy="13" r="3" fill="#111"/>
        <!-- Vocal sac blowing up like a bubble -->
        <circle cx="30" cy="45" r="18" fill="#ffeaa7" opacity="0.9"/>
        <!-- Bowtie -->
        <polygon points="24,58 36,58 30,55" fill="#eb4d4b"/>
        <polygon points="24,58 36,58 30,61" fill="#eb4d4b"/>
      </g>
      <!-- Frog 2 (Right) -->
      <g transform="translate(360, 140)">
        <ellipse cx="30" cy="35" rx="35" ry="25" fill="#7bed9f"/>
        <circle cx="18" cy="15" r="12" fill="#7bed9f"/>
        <circle cx="18" cy="13" r="6" fill="#fff"/>
        <circle cx="18" cy="13" r="3" fill="#111"/>
        <circle cx="42" cy="15" r="12" fill="#7bed9f"/>
        <circle cx="42" cy="13" r="6" fill="#fff"/>
        <circle cx="42" cy="13" r="3" fill="#111"/>
        <!-- Vocal sac -->
        <circle cx="30" cy="45" r="15" fill="#ffeaa7" opacity="0.85"/>
        <!-- Little flower on head -->
        <circle cx="18" cy="2" r="5" fill="#ff6b81"/>
        <circle cx="18" cy="2" r="2" fill="#ffd32a"/>
      </g>
      <!-- Musical Notes Floating -->
      <text x="240" y="80" font-size="28" fill="#fff">🎵</text>
      <text x="290" y="60" font-size="36" fill="#ffd32a">🎶</text>
      <text x="350" y="90" font-size="26" fill="#fff">✨</text>
    </svg>`,
    badge: "Wild Acoustics",
    targetAges: ["little", "curious", "junior"],
    versions: {
      little: {
        summary: "Ribbit! Scientists in a tropical rainforest discovered tree frogs that don't just croak—they sing musical notes together like a tiny choir!",
        content: `What does a frog sound like? You probably said 'Ribbit! Ribbit!'

Well, pack your ears for a musical surprise! Biologists exploring the Amazon rainforest discovered emerald tree frogs that sing true musical chords.

Instead of all croaking at the exact same time into noisy chaos, neighbor frogs listen to each other. One frog puffs out his throat bubble and sings a deep 'BOMMMM' note. Right as he finishes, his friend sings a sweet high 'PEEEEP!' 

Together, their swamp pond sounds like a peaceful chime orchestra!`
      },
      curious: {
        summary: "Acoustic biologists have documented chorus tree frogs singing in antiphon—taking turns at precise pitches to create natural harmonic chords that carry through dense jungle leaves.",
        content: `If you walk through the rainforest at dusk, you might think you are listening to a jazz band tuning up.

Bioacoustics researchers placed ultrasonic microphones around forest ponds and discovered that male tree frogs coordinate their calls using **antiphonal communication**—a fancy word for taking turns singing harmony!

When two frogs sit on adjacent lilypads, the second frog shifts its throat sac vibration frequency to be exactly a musical third or fifth above the first frog. 

Why do they do it? Sound researchers believe harmonized chords travel farther through heavy rainforest fog without getting jumbled up, helping frogs find friends without wasting their breath!`
      },
      junior: {
        summary: "Bioacoustic spectrogram analysis of tropical anuran vocalizations confirms intentional harmonic interval pitch matching and phase-locked calling routines.",
        content: `Anuran communication was long believed to consist solely of competitive acoustic jamming, where individuals attempt to overpower adjacent rivals with amplitude. 

However, multi-channel acoustic array recordings in cloud forest ecosystems demonstrate sophisticated cooperative signal coordination. Frogs employ phase-locked vocal intervals, staggering acoustic pulses by mere milliseconds to prevent acoustic interference.

Furthermore, frequency spectrograms demonstrate active pitch modulation: subordinate callers adjust fundamental resonance frequencies (F0) relative to dominant callers, generating consonant frequency ratios (such as perfect fourths and fifths). This acoustic niche partitioning maximizes signal propagation efficiency across high-attenuation arboreal canopies.`
      }
    },
    didYouKnow: "Some species of frogs can blow up their vocal sacs until they are larger than their entire heads!",
    wordDetective: [
      { word: "Vocal Sac", pronunciation: "VOH-kul sak", meaning: "An elastic skin balloon under a frog's chin that amplifies their singing." },
      { word: "Harmony", pronunciation: "HAR-muh-nee", meaning: "When different musical pitches blend together pleasingly to the ear." },
      { word: "Bioacoustics", pronunciation: "bye-oh-uh-KOO-stiks", meaning: "The science of studying all the wild sounds animals and nature make." }
    ],
    quiz: {
      question: "Why do these singing toads match their musical pitches?",
      options: ["To audition for a TV talent show", "So their songs travel clearly through thick jungle air without getting jumbled", "To put baby toads to sleep", "Because they forgot the words"],
      correctIndex: 1,
      explanation: "Harmonizing pitches allows their sound waves to travel smoothly through the humid forest without drowning each other out!"
    },
    reactions: { thumbsUp: 65, heart: 110, wow: 49, laugh: 42 }
  }
];

// Daily Wonder Poll
const DAILY_POLL = {
  id: "poll-2026",
  question: "If you could blast off in a spaceship right now, where would you go first?",
  options: [
    { id: "moon", label: "🌕 The Secret Moon Caves", votes: 142 },
    { id: "mars", label: "🪐 Mars to build red sandcastles", votes: 215 },
    { id: "saturn", label: "🛸 Saturn's sparkly ice rings", votes: 310 },
    { id: "alien", label: "👽 Hunt for friendly aliens beyond Pluto", votes: 189 }
  ]
};

// Daily Brain Teaser / Riddle
const DAILY_RIDDLE = {
  riddle: "I have rivers without water, forests without trees, and cities without people. What am I?",
  hint: "You might find me folded up in a pirate's treasure chest or on your classroom wall!",
  answer: "A Map! 🗺️"
};

// Mascot Tips & Friendly Greetings
const MASCOT_MESSAGES = [
  "Hi Explorer! I'm Barnaby Bear! Click 'Read Aloud' anytime you want me to read with you! 🐻",
  "Did you know reading just 10 minutes a day makes your brain sparkle with new ideas? ✨",
  "Check out the Word Detective tooltips to discover secret superpower words! 🔍",
  "Try the Bedtime Mode at night for sweet dreams under the stars! 🌙"
];
