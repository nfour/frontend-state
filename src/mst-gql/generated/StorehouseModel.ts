import { Instance } from "mobx-state-tree"
import { StorehouseModelBase } from "./StorehouseModel.base"

/* The TypeScript type of an instance of StorehouseModel */
export interface StorehouseModelType extends Instance<typeof StorehouseModel.Type> {}

/* A graphql query fragment builders for StorehouseModel */
export { selectFromStorehouse, storehouseModelPrimitives, StorehouseModelSelector } from "./StorehouseModel.base"

/**
 * StorehouseModel
 */
export const StorehouseModel = StorehouseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
