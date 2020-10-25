/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderModel, OrderModelType } from "./OrderModel"
import { OrderModelSelector } from "./OrderModel.base"
import { RootStoreType } from "./index"


/**
 * OrderPageBase
 * auto generated base class for the model OrderPageModel.
 *
 * The pagination object for elements of type 'Order'.
 */
export const OrderPageModelBase = ModelBase
  .named('OrderPage')
  .props({
    __typename: types.optional(types.literal("OrderPage"), "OrderPage"),
    /** The elements of type 'Order' in this page. */
    data: types.union(types.undefined, types.array(types.union(types.null, types.late((): any => OrderModel)))),
    /** A cursor for elements coming after the current page. */
    after: types.union(types.undefined, types.null, types.string),
    /** A cursor for elements coming before the current page. */
    before: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderPageModelSelector extends QueryBuilder {
  get after() { return this.__attr(`after`) }
  get before() { return this.__attr(`before`) }
  data(builder?: string | OrderModelSelector | ((selector: OrderModelSelector) => OrderModelSelector)) { return this.__child(`data`, OrderModelSelector, builder) }
}
export function selectFromOrderPage() {
  return new OrderPageModelSelector()
}

export const orderPageModelPrimitives = selectFromOrderPage().after.before
