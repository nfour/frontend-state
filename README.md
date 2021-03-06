# Frontend State Experiments

Clone the repo then `yarn && yarn dev`

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
  - Not well maintained

## `mst-gql`

- PROS:
  - Generated client from graphql schema
  - Type safe
  - Not coupled to React
- CONS:
  - Have to define queries semi-manually
  - Wire up & boilerplate is non-trivial when surfacing the values within the MST store it generates.
    - Especially when dealing with a types that contain no unique id
  - Must provide Root types
  - Data is not normalized if it is not specified as a Root type
  - Caching seems broken, always fetches and removes from cache while fetching...
  - Not well maintained
- TODO:
  - make more root types
    - this will improve the inferred types for nested objects
      - less assertion of types
    - allows for normalization to work
  - figure out how to make cache actually work well

## `recoil`

- PROS:
  - Can represent minimal shared state with minimal boilerplate or glue
  - Inline with React's state internal workings
  - From same corporation as React 
  - Well maintained
- CONS:
  - From same corporation as React 
  - Coupled to React
- NOTES:
  - Complex global state looks hard / unrecommended 
