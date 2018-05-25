import * as types from './types';
/***********STATS***********/
// Action Creators

export const incrementBaseStat = (player_id, stat_name) => {
  return {
    type: types.INCREMENT_BASE_STAT,
    player_id,
    stat_name
  }
}

export const decrementBaseStat = (player_id, stat_name) => {
  return {
    type: types.DECREMENT_BASE_STAT,
    player_id,
    stat_name
  }
}

/***********STATUS***********/
// Action Types

/**Target Select**/
// Action Creators

export const selectTarget = (player_id, body_part) => {
  return {
    type: types.SELECT_TARGET,
    player_id,
    body_part
  }
}
