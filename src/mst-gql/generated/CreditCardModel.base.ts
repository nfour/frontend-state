/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CreditCardBase
 * auto generated base class for the model CreditCardModel.
 */
export const CreditCardModelBase = ModelBase
  .named('CreditCard')
  .props({
    __typename: types.optional(types.literal("CreditCard"), "CreditCard"),
    network: types.union(types.undefined, types.string),
    number: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CreditCardModelSelector extends QueryBuilder {
  get network() { return this.__attr(`network`) }
  get number() { return this.__attr(`number`) }
}
export function selectFromCreditCard() {
  return new CreditCardModelSelector()
}

export const creditCardModelPrimitives = selectFromCreditCard().network.number
