/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { CreditCardModel, CreditCardModelType } from "./CreditCardModel"
import { CreditCardModelSelector } from "./CreditCardModel.base"
import { CustomerModel, CustomerModelType } from "./CustomerModel"
import { CustomerModelSelector } from "./CustomerModel.base"
import { ProductLineModel, ProductLineModelType } from "./ProductLineModel"
import { ProductLineModelSelector } from "./ProductLineModel.base"
import { RootStoreType } from "./index"


/**
 * OrderBase
 * auto generated base class for the model OrderModel.
 */
export const OrderModelBase = ModelBase
  .named('Order')
  .props({
    __typename: types.optional(types.literal("Order"), "Order"),
    shipDate: types.union(types.undefined, types.null, types.frozen()),
    line: types.union(types.undefined, types.array(types.late((): any => ProductLineModel))),
    /** The document's ID. */
    _id: types.identifier,
    shipAddress: types.union(types.undefined, types.late((): any => AddressModel)),
    creditCard: types.union(types.undefined, types.late((): any => CreditCardModel)),
    status: types.union(types.undefined, types.string),
    customer: types.union(types.undefined, types.late((): any => CustomerModel)),
    creationDate: types.union(types.undefined, types.frozen()),
    /** The document's timestamp. */
    _ts: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderModelSelector extends QueryBuilder {
  get shipDate() { return this.__attr(`shipDate`) }
  get _id() { return this.__attr(`_id`) }
  get status() { return this.__attr(`status`) }
  get creationDate() { return this.__attr(`creationDate`) }
  get _ts() { return this.__attr(`_ts`) }
  line(builder?: string | ProductLineModelSelector | ((selector: ProductLineModelSelector) => ProductLineModelSelector)) { return this.__child(`line`, ProductLineModelSelector, builder) }
  shipAddress(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`shipAddress`, AddressModelSelector, builder) }
  creditCard(builder?: string | CreditCardModelSelector | ((selector: CreditCardModelSelector) => CreditCardModelSelector)) { return this.__child(`creditCard`, CreditCardModelSelector, builder) }
  customer(builder?: string | CustomerModelSelector | ((selector: CustomerModelSelector) => CustomerModelSelector)) { return this.__child(`customer`, CustomerModelSelector, builder) }
}
export function selectFromOrder() {
  return new OrderModelSelector()
}

export const orderModelPrimitives = selectFromOrder().shipDate._id.status.creationDate._ts
