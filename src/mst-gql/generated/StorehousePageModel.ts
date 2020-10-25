import { Instance } from "mobx-state-tree"
import { StorehousePageModelBase } from "./StorehousePageModel.base"

/* The TypeScript type of an instance of StorehousePageModel */
export interface StorehousePageModelType extends Instance<typeof StorehousePageModel.Type> {}

/* A graphql query fragment builders for StorehousePageModel */
export { selectFromStorehousePage, storehousePageModelPrimitives, StorehousePageModelSelector } from "./StorehousePageModel.base"

/**
 * StorehousePageModel
 *
 * The pagination object for elements of type 'Storehouse'.
 */
export const StorehousePageModel = StorehousePageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
