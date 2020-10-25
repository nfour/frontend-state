# Frontend State Experiments

## `gqless`

- PROS:
  - Generated client from graphql schema
  - Able to start rediculously fast
  - Extremely terse & simple - hard to beat
  - Type safe
  - GQL Client/store resembles the actual graph tree
- CONS:
  - In BETA
  - Coupled to React
  - Doesnt support mutations fully yet

## `mst-gql`

- PROS:
  - Generated client from graphql schema
  - Type safe
  - Not coupled to React
- CONS:
  - Have to define queries semi-manually
  - Wire up & boilerplate is non-trivial when surfacing the values within the MST store it generates.
    - Especially when dealing with a types that contain no unique id
  - Can only get data from the root, no nesting based on schema shape

## `recoil`

- PROS:
  - Can represent minimal shared state with minimal boilerplate or glue
  - Inline with React's state internal workings
  - From same corporation as React 
- CONS:
  - From same corporation as React 
  - Coupled to React
- NOTES:
  - Complex global state looks hard / unrecommended 
