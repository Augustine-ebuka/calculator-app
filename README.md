## Calculator-app
The home page (`index.html`) is the Game Room: it links to the calculator and the games.

- `calculator/` holds the calculator: index.html, style.css and script.js
- `basketball/` holds Hoop Shot 3D
- `forest/` holds Forest Range

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
