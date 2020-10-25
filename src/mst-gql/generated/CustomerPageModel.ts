import { Instance } from "mobx-state-tree"
import { CustomerPageModelBase } from "./CustomerPageModel.base"

/* The TypeScript type of an instance of CustomerPageModel */
export interface CustomerPageModelType extends Instance<typeof CustomerPageModel.Type> {}

/* A graphql query fragment builders for CustomerPageModel */
export { selectFromCustomerPage, customerPageModelPrimitives, CustomerPageModelSelector } from "./CustomerPageModel.base"

/**
 * CustomerPageModel
 *
 * The pagination object for elements of type 'Customer'.
 */
export const CustomerPageModel = CustomerPageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
