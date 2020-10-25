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
import { RootStoreType } from "./index"


/**
 * CustomerBase
 * auto generated base class for the model CustomerModel.
 */
export const CustomerModelBase = ModelBase
  .named('Customer')
  .props({
    __typename: types.optional(types.literal("Customer"), "Customer"),
    /** The document's ID. */
    _id: types.identifier,
    lastName: types.union(types.undefined, types.string),
    firstName: types.union(types.undefined, types.string),
    creditCard: types.union(types.undefined, types.late((): any => CreditCardModel)),
    address: types.union(types.undefined, types.late((): any => AddressModel)),
    telephone: types.union(types.undefined, types.string),
    /** The document's timestamp. */
    _ts: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomerModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get lastName() { return this.__attr(`lastName`) }
  get firstName() { return this.__attr(`firstName`) }
  get telephone() { return this.__attr(`telephone`) }
  get _ts() { return this.__attr(`_ts`) }
  creditCard(builder?: string | CreditCardModelSelector | ((selector: CreditCardModelSelector) => CreditCardModelSelector)) { return this.__child(`creditCard`, CreditCardModelSelector, builder) }
  address(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`address`, AddressModelSelector, builder) }
}
export function selectFromCustomer() {
  return new CustomerModelSelector()
}

export const customerModelPrimitives = selectFromCustomer()._id.lastName.firstName.telephone._ts
