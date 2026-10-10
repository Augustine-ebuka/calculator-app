## Calculator-app
The home page (`index.html`) is the Game Room: it links to the calculator and the games.

- `calculator/` holds the calculator: index.html, style.css and script.js
- `basketball/` holds Hoop Shot 3D
- `forest/` holds Forest Range
- `skyfall/` holds Skyfall Defense
- `muse/` holds Runway Muse
- `race/` holds Apex Rush

## Calculator (calculator/)
The calculator consists of three files: index.html, style.css and script.js


### script.js
the script.js contain the whole logic of the calculator and i will like to share how i created it.

The Calculator class is a JavaScript class that represents a simple calculator. It has a number of methods that allow it to perform basic arithmetic operations, such as addition, subtraction, multiplication, and division.

The constructor method is a special method in JavaScript classes that is called when a new object is created from the class. It is used to initialize the object and set up any properties or state that the object needs.

In the Calculator class, the constructor method takes two arguments: previousOperandTextElement and currentOperandTextElement. These arguments are elements from the DOM that will be used to display the previous and current operands, respectively.

The constructor method sets the previousOperandTextElement and currentOperandTextElement properties of the Calculator object to the values of the arguments passed to the constructor. It also calls the allClear method, which resets the state of the calculator.

The other methods of the Calculator class perform various operations on the operands, such as deleting a digit, appending a number, choosing an operator, computing the result of an operation, and updating the display.

The updateDisplay method is used to update the display elements in the DOM with the current and previous operands, as well as the current operator. It uses the getDisplayNumber method to format the operands for display, and the innerText property to set the text of the display elements.

The Calculator class is used in the rest of the code you provided to create a calculator that can.

## Hoop Shot 3D (basketball/)
A 3D basketball shooting game built with three.js. Open `basketball/index.html` in any browser (it loads three.js from a CDN, so you need to be online). The earlier 2D version is in `basketball/2d.html`.

- Press anywhere and drag down, then let go to shoot. A longer pull means more power.
- Pull sideways to aim. The ball flies the opposite way, like a slingshot.
- The player crouches as you pull, then jumps and releases the ball at the top of the jump.
- Camera views: Behind, Front, Side, High and Ball cam (keys 1-5, or V to cycle).
- The dotted aim guide shows the arc. Switch it to Short or Off as you get better.
- After a miss the coach tells you what went wrong (short, long, left, right, rimmed out), and you stay on the same spot to adjust.
- Threes count 3 points and a swish adds a bonus point. Try the 60-second challenge once you're comfortable.

## Forest Range (forest/)
A first-person 3D target shooting game in a forest clearing, built with three.js. It teaches the basics of long-range shooting.

- **Practice range:** paper targets at 25, 50, 100, 200 and 300 m. The rifle is zeroed at 100 m, so further targets need you to aim higher.
- **Scope:** 4×, 8× and 12× zoom with a mil-dot reticle (1 dot = 1 mil = 10 cm at 100 m). The rangefinder shows the distance to whatever is under the cross.
- **Coach:** after each shot it tells you how far off you were and how many dots to hold over, for example "52 cm low, hold 2.6 dots higher". The hit card shows your group on the target.
- **Real effects:** bullet drop, wind drift (toggle Wind), breathing sway (hold Shift or Breath to steady it), recoil, a 5-round magazine, and far hits you hear a moment later.
- **Gun locker (10 guns):** 9mm Pistol, .357 Revolver, .22 Rimfire, 12-gauge Pump shotgun, .30-30 Lever, .308 Bolt-action, 5.56 Carbine, .30-06 Battle Rifle, .300 Magnum and .50 BMG. Each has its own bullet speed, zero distance (25 to 300 m), magazine, fire rate, recoil, sway, wind drift, scope power and 3D model. Handguns and the shotgun use iron sights, and the shotgun fires 9 spreading pellets. Open it with the Gun button or G, and switch guns with Q and E.
- **Hunt mode (levels):** before each level a briefing tells you the goal, for example "Level 1: take down 3 animals in 60 seconds", plus how far away they'll be and how many run. Clear it to unlock the next level: each level adds 2 animals and 10 seconds, pushes animals further out (up to 280 m), makes more of them run, and turns on wind from level 3. Your best level is remembered.
- **Wildlife:** 3D whitetail deer (bucks have antlers), wild boar and rabbits walk out of the tree line, graze, look around, or run across the clearing, and drop when hit. A shot just behind the front leg is a clean shot worth 25 instead of 10, and running animals score 1.5×.
- **Scenery:** pick Pine Forest, Autumn Woods, Winter Taiga or Misty Dawn from the Scenery button. Each has its own sky, light, fog, ground, mix of trees (pines, spruces, oaks, birches), undergrowth (grass, ferns, logs, stumps, mushrooms) and weather (floating motes, falling leaves or snow). Your choice is remembered.
- **Players online:** when the game is opened as a claude.ai artifact, a badge shows how many people are playing right now and how many are hunting. The static site has no server, so the badge stays hidden there.
- **Muzzle fire:** every shot throws a flame and flash from the muzzle sized to the gun, lights up the scene, and leaves a drifting smoke puff. Through the scope you see the blast glow.
- **Controls:** drag to aim, click/tap or Space to fire, mouse wheel or Z for the scope, Shift to hold breath, R to reload, 1–5 to pick a target, G for the gun locker, Q/E to switch guns, and arrow keys to nudge aim by a quarter mil.
- **On phones:** hold the phone sideways for the best view. Settings sit behind the Menu button, the target and scope buttons form a slim strip on the left, and coach tips fade after a few seconds. You can aim with one finger and shoot with another at the same time, using the Fire button or a quick tap anywhere. Phones get a lighter forest so the game stays smooth.

## Skyfall Defense (skyfall/)
A vertical arcade shooter. Meteors and alien raiders fall on a city at night; you slide a gunship left and right and its guns fire on their own.

- **Move:** drag anywhere (your finger stays off the ship), move the mouse, or use ← → / A D. **Bomb:** red button, Space or B. **Pause:** the II button, P or Esc.
- **Levels get faster:** each level everything falls about 13% faster, spawns come quicker, and new enemies join: alien drones that shoot back (level 2+), divers that lock on and dive at you (3+), armoured hexes (4+). Every 5th level is a mothership boss with bullet patterns that gets angrier below 40% health.
- **Power-ups** drop from kills and float down on parachutes: Bomb (clears the sky), Spread shot, Plasma laser, Rapid fire, Shield, Repair and Time warp.
- **Upgrades:** after each level pick 1 of 3 permanent upgrades (damage, fire rate, extra barrels, wingman drones, tractor beam, critical hits, bomb bay, city shield, longer power-ups).
- **Combo multiplier** up to ×5 for kills in quick succession, and a city bonus for every wave you clear with the shield intact. Your best score is saved.
- Meteors glow and trail fire as they burn through the atmosphere, big ones split into shards, and explosions shake the screen. Sound effects and a driving bass soundtrack are made live in the browser, and the music speeds up as you level up.

## Runway Muse (muse/)
A 3D fashion styling game. Start by choosing **Her** or **Him**, then dress a 3D model you can turn, zoom and view from the front, side, back or face. A built-in stylist tells you how the look is working.

- **3D clothes:** each garment is shaped around the body. Wrinkles and drape are built into the cloth, and each fabric has its own look: cotton weave, denim twill, chunky knit, satin silk, wool, glossy leather and quilted nylon. Coats sit over tops, flare over skirts and stay open at the front.
- **Two wardrobes:** hers has tees, blouses, crop tops, camisoles, jeans, wide trousers, pencil, midi and pleated skirts, dresses (slip, sundress, wrap, bodycon, gown), blazers, trenches, cardigans, puffers, heels, boots, bags and jewellery. His has tees, Oxford shirts, polos, sweaters, chinos, suit trousers, blazers, overcoats, bombers, oxfords, loafers, chelsea boots, ties, watches and glasses. Both come in 25 colours and six prints, with five hairstyles, eight hair colours and six skin tones.
- **The stylist** uses well-known colour rules for clothes:
  - colour families on the colour wheel;
  - monochrome, analogous, complementary and triadic schemes, and clashing pairs;
  - the 60-30-10 balance and no more than about three main colours;
  - grounding brights with neutrals, light/dark contrast, and colours that suit your skin's warm or cool undertone;
  - one print at a time and matched formality (no sneakers with a gown);
  - for him: belt matches shoes and the tie is darker than the shirt.

  Most notes come with a one-tap **Fix**, and every colour picker stars the stylist's top three colours.
- **Client briefs** for each model, such as coffee date, wedding guest, office, beach, gala, winter and job interview, each with a live checklist. Score 3 stars to unlock the next brief.
- **Runway:** the model turns under camera flashes while three judges score colour, occasion and styling. You earn coins to unlock premium pieces and prints.
- **Style me** builds a complete look for the current brief, and **Lookbook** saves snapshots of your favourite outfits. Progress is saved in your browser.
- The earlier flat version is still available at `muse/2d.html`.

## Apex Rush (race/)
A 3D street racing game built with three.js. Six cars start on the grid, the five start lights go out, and you race three laps against five AI rivals.

- **Three circuits:** Coastline GP (daytime island track with pine forests and the sea), Dune Canyon (sunset desert between red mesas) and Neon Harbor (night street circuit lit by neon barriers and skyscrapers). Each has kerbs in the corners, barriers, grandstands, billboards and boost pads on the straights.
- **Driving:** hold Space while steering through a corner to drift. The longer the drift, the bigger the boost when you let go (blue, orange, then purple sparks). Shift fires the nitro, and drifting tops it up. Running wide onto the grass or sand slows you down, and hitting a wall costs speed.
- **Five cars** with different top speed, acceleration, handling and nitro: Volt S (electric), Raptor GT, Dune R (rally, fast off-road), Titan V8 (muscle) and Mirage X (hypercar). Win coins to buy them and pick from 12 paint colours in the Garage.
- **Modes:** Quick race (choose track and 2, 3 or 5 laps), Championship (all three tracks, F1-style points and a title bonus) and Time trial, where you race a see-through ghost of your best lap.
- **Race online:** race your friends live. Everyone who has the game open shows up on the Online screen. One player hosts a race (picks the track and laps) and others join from the list or with a 4-letter race code. Up to 8 drivers start together on the same lights and see each other's cars move live, can bump into each other, and get a shared leaderboard and results. Online play uses the Claude artifact's room feature, so it works when the game is opened from its shared Claude link by signed-in people the artifact is shared with. On the plain website the rest of the game works offline.
- **Rivals:** Easy, Pro or Legend. AI drivers take the inside of corners, brake for the bends, overtake slower cars and use nitro on the straights.
- **Feel:** a chase camera that swings with your slides, a far chase camera and a bumper camera; speed lines, camera shake, tyre smoke, sparks and nitro flames; a live engine sound that changes gear (an electric whine for the Volt), tyre squeal and wind noise.
- **Controls:** arrows or WASD, Space drift, Shift nitro, C camera, R back on track, P pause. Gamepads work. On phones choose your steering: buttons, tilt (turn the phone like a wheel, tap the steering bar to recentre, with an invert option) or drag (put a thumb anywhere on the left half and slide). Optional auto-gas; landscape works best.
