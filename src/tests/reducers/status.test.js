import reducer from '../../redux/reducers/status';
import * as types from '../../redux/actions/types';
import { CreatePlayer, CreateStatsObject } from '../../Classes';

describe('Status reducer', () => {
  it('should return the initial state', () => {
    expect(JSON.stringify(
        reducer(undefined, 'no action')
      )).toEqual(
        JSON.stringify([
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
        ])
      )
  })

  it('should return default state if no state and/or action passed in', () => {
    expect(JSON.stringify(
        reducer()
      )).toEqual(
        JSON.stringify([
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
        ])
      )
  })

  it('should handle SELECT_TARGET action by return correct body_part', () => {
    expect(JSON.stringify(
        reducer(undefined, {type: types.SELECT_TARGET, player_id: 1, body_part: 'left_arm'})
      )).toEqual(
        JSON.stringify([
          {
            id: 1,
            icon: null,
            name: null,
            wounds: [],
            target_select: {
              body_part: 'left_arm'
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
        ])
      )
  })
});
