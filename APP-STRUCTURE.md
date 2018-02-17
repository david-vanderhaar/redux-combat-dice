We'll plan out our app using steps based on [an article](https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a) by [rajaraodv](https://medium.com/@rajaraodv)

## Components

#### Stats
+ State (data received)
  1. BaseStats object {statName: strength value}
  2. Stamina object {statName: stamina value}
  3. Dice Pool object [{statName: value}]
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
  1. Icon
  2. Name
  3. Wounds Array
  ```javascript
  [{body_part: "name", effect_description: "blah blah"}]
  ```
  4. Stamina Meter

###### Target Select (sub-component of Status)
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
