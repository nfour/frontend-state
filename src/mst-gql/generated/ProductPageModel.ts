import { Instance } from "mobx-state-tree"
import { ProductPageModelBase } from "./ProductPageModel.base"

/* The TypeScript type of an instance of ProductPageModel */
export interface ProductPageModelType extends Instance<typeof ProductPageModel.Type> {}

/* A graphql query fragment builders for ProductPageModel */
export { selectFromProductPage, productPageModelPrimitives, ProductPageModelSelector } from "./ProductPageModel.base"

/**
 * ProductPageModel
 *
 * The pagination object for elements of type 'Product'.
 */
export const ProductPageModel = ProductPageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
