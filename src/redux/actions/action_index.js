/***********STATS***********/
// Action Types

export const INCREMENT_BASE_STAT = 'INCREMENT_BASE_STAT';
export const DECREMENT_BASE_STAT = 'DECREMENT_BASE_STAT';

// Action Creators

export const incrementBaseStat = (player_id, stat_name) => {
  return {
    type: INCREMENT_BASE_STAT,
    player_id,
    stat_name
  }
}

export const decrementBaseStat = (player_id, stat_name) => {
  return {
    type: DECREMENT_BASE_STAT,
    player_id,
    stat_name
  }
}

/***********STATUS***********/
// Action Types

/**Target Select**/
export const SELECT_TARGET = 'SELECT_TARGET';

// Action Creators

export const selectTarget = (player_id, body_part) => {
  return {
    type: SELECT_TARGET,
    player_id,
    body_part
  }
}
