import { Instance } from "mobx-state-tree"
import { ProductLineModelBase } from "./ProductLineModel.base"

/* The TypeScript type of an instance of ProductLineModel */
export interface ProductLineModelType extends Instance<typeof ProductLineModel.Type> {}

/* A graphql query fragment builders for ProductLineModel */
export { selectFromProductLine, productLineModelPrimitives, ProductLineModelSelector } from "./ProductLineModel.base"

/**
 * ProductLineModel
 */
export const ProductLineModel = ProductLineModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
