/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ProductModel, ProductModelType } from "./ProductModel"
import { ProductModelSelector } from "./ProductModel.base"
import { RootStoreType } from "./index"


/**
 * ProductLineBase
 * auto generated base class for the model ProductLineModel.
 */
export const ProductLineModelBase = ModelBase
  .named('ProductLine')
  .props({
    __typename: types.optional(types.literal("ProductLine"), "ProductLine"),
    product: types.union(types.undefined, types.late((): any => ProductModel)),
    quantity: types.union(types.undefined, types.integer),
    price: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProductLineModelSelector extends QueryBuilder {
  get quantity() { return this.__attr(`quantity`) }
  get price() { return this.__attr(`price`) }
  product(builder?: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector)) { return this.__child(`product`, ProductModelSelector, builder) }
}
export function selectFromProductLine() {
  return new ProductLineModelSelector()
}

export const productLineModelPrimitives = selectFromProductLine().quantity.price
