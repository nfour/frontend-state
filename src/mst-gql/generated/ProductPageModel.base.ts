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
 * ProductPageBase
 * auto generated base class for the model ProductPageModel.
 *
 * The pagination object for elements of type 'Product'.
 */
export const ProductPageModelBase = ModelBase
  .named('ProductPage')
  .props({
    __typename: types.optional(types.literal("ProductPage"), "ProductPage"),
    /** The elements of type 'Product' in this page. */
    data: types.union(types.undefined, types.array(types.union(types.null, types.late((): any => ProductModel)))),
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

export class ProductPageModelSelector extends QueryBuilder {
  get after() { return this.__attr(`after`) }
  get before() { return this.__attr(`before`) }
  data(builder?: string | ProductModelSelector | ((selector: ProductModelSelector) => ProductModelSelector)) { return this.__child(`data`, ProductModelSelector, builder) }
}
export function selectFromProductPage() {
  return new ProductPageModelSelector()
}

export const productPageModelPrimitives = selectFromProductPage().after.before
