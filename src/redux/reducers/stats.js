import { CreatePlayer } from '../../Classes';

const stats = (state = [CreatePlayer({id: 1}), CreatePlayer({id: 2})], action = 'no action') => {
  switch (action.type) {
    case 'INCREMENT_BASE_STAT':
      return state.map(player => {
        if (player.id === action.player_id && player.stats.stamina > 0) {
          let new_player = {...player}
          new_player.stats = {...new_player.stats}
          new_player.stats.base = {...new_player.stats.base}
          new_player.stats.stamina_added = {...new_player.stats.stamina_added}
          new_player.stats.dice_pool = new_player.stats.dice_pool.concat().map(dice => {
            return {...dice}
          })
          new_player.stats.stamina_added[action.stat_name]++
          new_player.stats.stamina--
          return new_player
        } else {
          return player
        }
      }
    )
    case 'DECREMENT_BASE_STAT':
      return state.map(player => {
        if (player.id === action.player_id && player.stats.stamina_added[action.stat_name] > 0) {
          let new_player = {...player}
          new_player.stats = {...new_player.stats}
          new_player.stats.base = {...new_player.stats.base}
          new_player.stats.stamina_added = {...new_player.stats.stamina_added}
          new_player.stats.dice_pool = new_player.stats.dice_pool.concat().map(dice => {
            return {...dice}
          })
          new_player.stats.stamina_added[action.stat_name]--
          new_player.stats.stamina++
          return new_player
        } else {
          return player
        }
      }
    )
    default:
      return state
  }
}

export default stats
