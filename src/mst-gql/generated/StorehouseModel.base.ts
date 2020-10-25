/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { RootStoreType } from "./index"


/**
 * StorehouseBase
 * auto generated base class for the model StorehouseModel.
 */
export const StorehouseModelBase = ModelBase
  .named('Storehouse')
  .props({
    __typename: types.optional(types.literal("Storehouse"), "Storehouse"),
    /** The document's ID. */
    _id: types.identifier,
    /** The document's timestamp. */
    _ts: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.string),
    address: types.union(types.undefined, types.late((): any => AddressModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class StorehouseModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get _ts() { return this.__attr(`_ts`) }
  get name() { return this.__attr(`name`) }
  address(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`address`, AddressModelSelector, builder) }
}
export function selectFromStorehouse() {
  return new StorehouseModelSelector()
}

export const storehouseModelPrimitives = selectFromStorehouse()._id._ts.name
