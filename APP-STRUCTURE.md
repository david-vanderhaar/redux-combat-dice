We'll plan out our app using steps based on [an article](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a) by [rajaraodv](https://medium.com/@rajaraodv)

## Components

#### Stats
+ State (data received)
  1. BaseStats (Object) {statName: strength value}
  2. Stamina (Object) {statName: stamina value}
  3. Dice Pool (Object) [{statName: value}]
+ Actions
  1. Each base stat's strength value can be incremented/decremented using player's stamina pool. This will happen by listening for DOM events and sending an action described as:

    ```javascript
    {
      type: 'INCREMENT_BASE_STAT',
      payload: {statName: 'speed'}
    }
    {
      type: 'DECREMENT_BASE_STAT',
      payload: {statName: 'speed'}
    }
    ```

#### Status
+ State (data received)
  1. Icon (SVG)
  2. Name (String)
  3. Wounds (Array)
  ```javascript
  [{body_part: "name", effect_description: "blah blah"}]
  ```
  4. Stamina Meter (Integer)

*Target Select (sub-component of Status)*
+ State (data received)
  1. Target Options array (based on certain stat strength) `[{body_part: "name", effect_description: "blah blah"}]`
  2. Target Selected `{body_part: "name", effect_description: "blah blah"}`
+ Actions
  1. Player's next target can be selected based off of a particular stat strength. Will send action based off DOM event (scroll, click, or keypress). Action described as:

    ```javascript
    {
      type: 'SELECT_TARGET',
      payload: {body_part: 'name', id: 1}
    }
    ```

#### Battlefield
+ State (data received)
  1. Player 1 (Object)
  ```javascript
  {id: 1, name: 'Player 1', icon: 'SVG String'}
  ```
  2. Player 2 (Object)
  ```javascript
  {id: 1, name: 'Player 2', icon: 'SVG String'}
  ```

*Inventory (sub-component of Battlefield)*
+ State (data received)
  1. Items (Array)
  ```javascript
  [
    {
      id: 1,
      stats: {
        att: -1,
        def: 2,
        mov: 0,
        finesse: 0
      }
      name: "Sword",
      description: "BLAH"
    }
  ]
  ```
  2. Item Selected (Object)
  ```javascript
  {
    id: 1,
    stats: {
      att: -1,
      def: 2,
      mov: 0,
      finesse: 0
    }
    name: "Sword",
    description: "BLAH"
  }
  ```
+ Actions
  1. Player's item can be shown as selected based on action. Will send action based off DOM event (scroll, click, or keypress). Action described as:

    ```javascript
    {
      type: 'SELECT_ITEM',
      payload: {player_id: 1, item_id: 1}
    }
    ```
  2. Player's item can be used based on action. Will send action based off DOM event (scroll, click, or keypress).
  Action described as:

    ```javascript
    {
      type: 'USE_ITEM',
      payload: {
        player_id: 1,
        item_id: 1,
        stats: {
          att: -1,
          def: 2,
          mov: 0,
          finesse: 0
        }
      }
    }
    ```
*Dice Select (sub-component of Battlefield)*
+ State (data received)
  1. Current Dice Pool (Array)
  `[{type: "Strength", value: 3}]`
+ Actions
  1. New Dice Pool created at beginning of round.
  ```javascript
  {
    type: 'CREATE_DICE_POOL',
  }
  ```
  2. Give dice to player during draft phase
  ```javascript
  {
    type: 'DRAFT_DIE',
    payload: {
      player_id: 1,
      die_type: "Strength",
      die_value: 3
    }
  }
  ```
