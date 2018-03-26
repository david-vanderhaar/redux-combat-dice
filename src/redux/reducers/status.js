let initial_state = [
  {
    id: 1,
    icon: null,
    name: null,
    wounds: [],
    target_select: {
      body_part: null
    }
  },
  {
    id: 2,
    icon: null,
    name: null,
    wounds: [],
    target_select: {
      body_part: null
    }
  }
]

const status = (state = initial_state, action) => {
  switch (action.type) {
    case 'SELECT_TARGET':
      return state.map(player => {
        if (player.id === action.player_id) {
          let new_player = {...player}
          new_player.wounds = new_player.wounds.concat()
          new_player.target_select = {...new_player.target_select}
          new_player.target_select.body_part = action.body_part
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

export default status
