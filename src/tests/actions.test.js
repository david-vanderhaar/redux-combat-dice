import * as actions from '../redux/actions/action_index';
import * as types from '../redux/actions/types';

describe('Action - Stats: Increment Base Stat', () => {
  it('should create an action to increment a base stat', () => {
    const player_id = 1
    const stat_name = 'speed'
    const expectedAction = {
      type: types.INCREMENT_BASE_STAT,
      player_id,
      stat_name
    }
    expect(actions.incrementBaseStat(player_id, stat_name)).toEqual(expectedAction)
  })
})

describe('Action - Stats: Decrement Base Stat', () => {
  it('should create an action to decrement a base stat', () => {
    const player_id = 1
    const stat_name = 'finesse'
    const expectedAction = {
      type: types.DECREMENT_BASE_STAT,
      player_id,
      stat_name
    }
    expect(actions.decrementBaseStat(player_id, stat_name)).toEqual(expectedAction)
  })
})

describe('Action - Status: Select Target', () => {
  it('should create an action to let the player select a target', () => {
    const player_id = 1
    const body_part = 'left_arm'
    const expectedAction = {
      type: types.SELECT_TARGET,
      player_id,
      body_part
    }
    expect(actions.selectTarget(player_id, body_part)).toEqual(expectedAction)
  })
})
