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
 * ProductBase
 * auto generated base class for the model ProductModel.
 */
export const ProductModelBase = ModelBase
  .named('Product')
  .props({
    __typename: types.optional(types.literal("Product"), "Product"),
    name: types.union(types.undefined, types.string),
    quantity: types.union(types.undefined, types.integer),
    backorderLimit: types.union(types.undefined, types.integer),
    description: types.union(types.undefined, types.string),
    /** The document's ID. */
    _id: types.identifier,
    price: types.union(types.undefined, types.number),
    storehouse: types.union(types.undefined, types.late((): any => StorehouseModel)),
    backordered: types.union(types.undefined, types.boolean),
    /** The document's timestamp. */
    _ts: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get quantity() { return this.__attr(`quantity`) }
  get backorderLimit() { return this.__attr(`backorderLimit`) }
  get description() { return this.__attr(`description`) }
  get _id() { return this.__attr(`_id`) }
  get price() { return this.__attr(`price`) }
  get backordered() { return this.__attr(`backordered`) }
  get _ts() { return this.__attr(`_ts`) }
  storehouse(builder?: string | StorehouseModelSelector | ((selector: StorehouseModelSelector) => StorehouseModelSelector)) { return this.__child(`storehouse`, StorehouseModelSelector, builder) }
}
export function selectFromProduct() {
  return new ProductModelSelector()
}

export const productModelPrimitives = selectFromProduct().name.quantity.backorderLimit.description._id.price.backordered._ts
