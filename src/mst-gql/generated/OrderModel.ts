import { Instance } from "mobx-state-tree"
import { OrderModelBase } from "./OrderModel.base"

/* The TypeScript type of an instance of OrderModel */
export interface OrderModelType extends Instance<typeof OrderModel.Type> {}

/* A graphql query fragment builders for OrderModel */
export { selectFromOrder, orderModelPrimitives, OrderModelSelector } from "./OrderModel.base"

/**
 * OrderModel
 */
export const OrderModel = OrderModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
