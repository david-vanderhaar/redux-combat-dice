export const CreateStatsObject = ({
  base = {
    speed: 1,
    finesse: 1,
    strength: 1,
    defense: 1,
  },
  stamina_added = {
    speed: 0,
    finesse: 0,
    strength: 0,
    defense: 0,
  },
  dice_pool = [],
  stamina = 3,
} = {}) => ({
  base,
  stamina_added,
  dice_pool,
  stamina,
  // Methods
  getStat(name) {
    let added_dice = this.dice_pool
    .filter(die => die.stat_name === name)
    .reduce((a, b) => ({stat_name: name, value: a.value + b.value}), {stat_name: name, value: 0});
    return this.base[name] + this.stamina_added[name] + added_dice.value;
  }

});
// example instantiation
// CreateTile({type: 'WALL', canPass: false, containsDestructible: false}))

export const CreatePlayer = ({
    // Set default values if none passed in
    id = null,
    stats = CreateStatsObject()
  } = {}) => ({
  id,
  stats,
});
