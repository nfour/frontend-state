import { Instance } from "mobx-state-tree"
import { CustomerModelBase } from "./CustomerModel.base"

/* The TypeScript type of an instance of CustomerModel */
export interface CustomerModelType extends Instance<typeof CustomerModel.Type> {}

/* A graphql query fragment builders for CustomerModel */
export { selectFromCustomer, customerModelPrimitives, CustomerModelSelector } from "./CustomerModel.base"

/**
 * CustomerModel
 */
export const CustomerModel = CustomerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
