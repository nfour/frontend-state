import { Instance } from "mobx-state-tree"
import { CreditCardModelBase } from "./CreditCardModel.base"

/* The TypeScript type of an instance of CreditCardModel */
export interface CreditCardModelType extends Instance<typeof CreditCardModel.Type> {}

/* A graphql query fragment builders for CreditCardModel */
export { selectFromCreditCard, creditCardModelPrimitives, CreditCardModelSelector } from "./CreditCardModel.base"

/**
 * CreditCardModel
 */
export const CreditCardModel = CreditCardModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
