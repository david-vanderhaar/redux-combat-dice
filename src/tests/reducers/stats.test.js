import reducer from '../../redux/reducers/stats';
import * as types from '../../redux/actions/types';
import { CreatePlayer, CreateStatsObject } from '../../Classes';

describe('Stats reducer', () => {
  it('should return the initial state', () => {
    expect(JSON.stringify(
        reducer(undefined, 'no action')
      )).toEqual(
        JSON.stringify([
          CreatePlayer({id: 1}),
          CreatePlayer({id: 2})
        ])
      )
  })

  it('should return default state if no state and/or action passed in', () => {
    expect(JSON.stringify(
        reducer()
      )).toEqual(
        JSON.stringify([
          CreatePlayer({id: 1}),
          CreatePlayer({id: 2})
        ])
      )
  })

  it('should handle INCREMENT_BASE_STAT by increasing SPEED stat and decreasing STAMINA', () => {
    expect(
      JSON.stringify(
        reducer(undefined, {type: types.INCREMENT_BASE_STAT, player_id: 1, stat_name: 'speed'})
      )).toEqual(
        JSON.stringify([
          CreatePlayer({id: 1, stats: CreateStatsObject({stamina_added: {speed: 1, finesse: 0, strength: 0, defense: 0}, stamina: 2})}),
          CreatePlayer({id: 2})
        ])
      )
  })

  it('should handle DECREMENT_BASE_STAT by decreasing FINESSE stat and increasing STAMINA', () => {
    const initialState = reducer(undefined, 'no action')
    const stateWithIncreasedStat = reducer(initialState, {type: types.INCREMENT_BASE_STAT, player_id: 1, stat_name: 'finesse'})
    expect(
      JSON.stringify(
        reducer(stateWithIncreasedStat, {type: types.DECREMENT_BASE_STAT, player_id: 1, stat_name: 'finesse'})
      )).toEqual(
        JSON.stringify([
          CreatePlayer({id: 1, stats: CreateStatsObject({stamina_added: {speed: 0, finesse: 0, strength: 0, defense: 0}, stamina: 3})}),
          CreatePlayer({id: 2})
        ])
      )
  })
});
