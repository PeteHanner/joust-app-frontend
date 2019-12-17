# Joust!

Flatiron Module 4 project by German Garcia Gonzales and Pete Hanner

## FRONT END

Developed as part of curriculum at Flatiron DC. Paired project focusing on React framework. In this game, users select their armor, weapon, and horse to take part in a medieval tournament. Each loadout option has differing stats in attack, defense, and speed. These stats are tied to a randomized "battle" algorithm, resulting in unique benefits and drawbacks for each different loadout. Will users try to make a balanced build that mitigates any weak points but doesn't excel in any particular area? Or will they go the min-max route to become an untouchable tortoise, wiley speed demon, or damage-heavy berserker? 

[Link to back end](https://github.com/PeteHanner/joust-app-backend)

## Demo

When the game loads, the right side icons are blank, indicating that the user still needs to select their loadout.

![Start of game](https://s5.gifyu.com/images/01-start.gif)

Clicking on one of the left-side icons takes you to the loadout screen. Clicking any of the items in the grid will show you a card with details on its battle stats. 

Attack and defense stats are out of 100, representing their % chance of successfully hitting an opponent or mitigating opponent damage, respectively. Base damage is the amount of damage a weapon will do. Speed modifiers affect base damage (for example, 1 is unchanged, 1.1 does 10% additional damage on success, and 0.9 does 10% less damage on success). All speed modifiers are averaged together for a final damage multiplier.

Once the desired equipment has been found, click the 'equip' button to add it to your loadout.

![Equipment selection](https://s5.gifyu.com/images/02-equipment.gif)

Once all equipment has been selected, clicking the Joust! logo in the middle of the screen will navigate you to the battle page. Your equipment and stats are visible on the left, with a randomized opponent on the right. 

![Going from equipment selection to battle page](https://s5.gifyu.com/images/03-startc9252500120b803b.gif)

Clicking the 'Joust!' button on the middle of the page will simulate a single round of combat. The box over the button will display the results of the round. Both the player and the opponent attempt an attack on the other. If an attack is successful, the target's armor still has a possibility of defending against the attack and mitigating damage.

The player and opponent each have a health bar keeping track of their remaining hit points. Once either player is reduced to 0 HP, an alert displaying the result (player win, player loss, or draw) is shown and the player is taken back to the home screen. From there, they can edit their loadout as desired and play again.

![Battle sequence](https://s5.gifyu.com/images/04-battle.gif)