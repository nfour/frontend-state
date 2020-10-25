/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { StorehouseModel, StorehouseModelType } from "./StorehouseModel"
import { StorehouseModelSelector } from "./StorehouseModel.base"
import { RootStoreType } from "./index"


/**
 * StorehousePageBase
 * auto generated base class for the model StorehousePageModel.
 *
 * The pagination object for elements of type 'Storehouse'.
 */
export const StorehousePageModelBase = ModelBase
  .named('StorehousePage')
  .props({
    __typename: types.optional(types.literal("StorehousePage"), "StorehousePage"),
    /** The elements of type 'Storehouse' in this page. */
    data: types.union(types.undefined, types.array(types.union(types.null, types.late((): any => StorehouseModel)))),
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

export class StorehousePageModelSelector extends QueryBuilder {
  get after() { return this.__attr(`after`) }
  get before() { return this.__attr(`before`) }
  data(builder?: string | StorehouseModelSelector | ((selector: StorehouseModelSelector) => StorehouseModelSelector)) { return this.__child(`data`, StorehouseModelSelector, builder) }
}
export function selectFromStorehousePage() {
  return new StorehousePageModelSelector()
}

export const storehousePageModelPrimitives = selectFromStorehousePage().after.before
