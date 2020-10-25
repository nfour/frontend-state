/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomerModel, CustomerModelType } from "./CustomerModel"
import { CustomerModelSelector } from "./CustomerModel.base"
import { RootStoreType } from "./index"


/**
 * CustomerPageBase
 * auto generated base class for the model CustomerPageModel.
 *
 * The pagination object for elements of type 'Customer'.
 */
export const CustomerPageModelBase = ModelBase
  .named('CustomerPage')
  .props({
    __typename: types.optional(types.literal("CustomerPage"), "CustomerPage"),
    /** The elements of type 'Customer' in this page. */
    data: types.union(types.undefined, types.array(types.union(types.null, types.late((): any => CustomerModel)))),
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

export class CustomerPageModelSelector extends QueryBuilder {
  get after() { return this.__attr(`after`) }
  get before() { return this.__attr(`before`) }
  data(builder?: string | CustomerModelSelector | ((selector: CustomerModelSelector) => CustomerModelSelector)) { return this.__child(`data`, CustomerModelSelector, builder) }
}
export function selectFromCustomerPage() {
  return new CustomerPageModelSelector()
}

export const customerPageModelPrimitives = selectFromCustomerPage().after.before
