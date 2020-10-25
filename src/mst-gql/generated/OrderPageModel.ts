import { Instance } from "mobx-state-tree"
import { OrderPageModelBase } from "./OrderPageModel.base"

/* The TypeScript type of an instance of OrderPageModel */
export interface OrderPageModelType extends Instance<typeof OrderPageModel.Type> {}

/* A graphql query fragment builders for OrderPageModel */
export { selectFromOrderPage, orderPageModelPrimitives, OrderPageModelSelector } from "./OrderPageModel.base"

/**
 * OrderPageModel
 *
 * The pagination object for elements of type 'Order'.
 */
export const OrderPageModel = OrderPageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
