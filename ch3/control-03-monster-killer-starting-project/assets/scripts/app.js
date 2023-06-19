const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const enteredValue = prompt("Maximum life for you and the monster", "100");

let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  let currentMonsterHealth = chosenMaxLife;
  let currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}
function endRound() {
  const initalPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initalPlayerHealth;
    alert("you would be dead but the bonus life is saved you");
    setPlayerHealth(initalPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("you won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("you have a draw!");
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}
function attackMonster(mode) {
  let maxdamage;
  if (mode === "ATTACK") {
    maxdamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxdamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxdamage);
  currentMonsterHealth -= damage;
  endRound();
}
function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("you can't heal to more than your max inital health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
