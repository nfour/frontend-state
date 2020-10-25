import { Instance } from "mobx-state-tree"
import { AddressModelBase } from "./AddressModel.base"

/* The TypeScript type of an instance of AddressModel */
export interface AddressModelType extends Instance<typeof AddressModel.Type> {}

/* A graphql query fragment builders for AddressModel */
export { selectFromAddress, addressModelPrimitives, AddressModelSelector } from "./AddressModel.base"

/**
 * AddressModel
 */
export const AddressModel = AddressModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
