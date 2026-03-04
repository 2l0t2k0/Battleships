# Battleships
Getting started: 

A normal game of battleships involves either 2 players or a player and a computer taking turns to fire on a 10x10 board, in an attempt to take out the other player/computer's placed ships. While that remains a strech goal, the current implementation is a significantly simplified game, where the player is given a limited number of shots to eliminate all ships on the board

Instructions:
Input your desired amount of starting ammo.(Default:40)
Click start to start game
Click on board to launch attacks
Attempt to sink all ships before you run out of ammo.

Pseudocode:
Input Ammocount (This is the number of ammo the player will start with, with a default value)
Input Start (To begain the game)
Generate ship location
Input Shot location (Player clicks to fire)
Output Hit or Miss (Game should be able to respond if shot is a hit or miss)
Repeat previous 2 steps (Game should not terminate suddenly, instead looping the previous 2 steps until the following)
Output Win or Lose (Game should terminate and tell the player if they have won or lost)


Attributions: CSS: Sakura (https://oxal.org/projects/sakura/)


Technologies used: JavaScript, HTML, CSS


Next steps: Full rewrite of entire codebase.
            Complete random generation of ship deployment
            Option to vary ship composition
            Ship tracker while in game
            Viable 2 player Hotseat
            Viable Player vs Computer
