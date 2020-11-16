/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { ProductModel, ProductModelType } from "./ProductModel"
import { productModelPrimitives, ProductModelSelector } from "./ProductModel.base"
import { StorehouseModel, StorehouseModelType } from "./StorehouseModel"
import { storehouseModelPrimitives, StorehouseModelSelector } from "./StorehouseModel.base"
import { AddressModel, AddressModelType } from "./AddressModel"
import { addressModelPrimitives, AddressModelSelector } from "./AddressModel.base"
import { OrderModel, OrderModelType } from "./OrderModel"
import { orderModelPrimitives, OrderModelSelector } from "./OrderModel.base"
import { ProductLineModel, ProductLineModelType } from "./ProductLineModel"
import { productLineModelPrimitives, ProductLineModelSelector } from "./ProductLineModel.base"
import { CreditCardModel, CreditCardModelType } from "./CreditCardModel"
import { creditCardModelPrimitives, CreditCardModelSelector } from "./CreditCardModel.base"
import { CustomerModel, CustomerModelType } from "./CustomerModel"
import { customerModelPrimitives, CustomerModelSelector } from "./CustomerModel.base"
import { CustomerPageModel, CustomerPageModelType } from "./CustomerPageModel"
import { customerPageModelPrimitives, CustomerPageModelSelector } from "./CustomerPageModel.base"
import { ProductPageModel, ProductPageModelType } from "./ProductPageModel"
import { productPageModelPrimitives, ProductPageModelSelector } from "./ProductPageModel.base"
import { StorehousePageModel, StorehousePageModelType } from "./StorehousePageModel"
import { storehousePageModelPrimitives, StorehousePageModelSelector } from "./StorehousePageModel.base"
import { OrderPageModel, OrderPageModelType } from "./OrderPageModel"
import { orderPageModelPrimitives, OrderPageModelSelector } from "./OrderPageModel.base"



export type OrderInput = {
  customer?: OrderCustomerRelation
  line: ProductLineInput[]
  status: string
  creationDate: any
  shipDate?: any
  shipAddress: AddressInput
  creditCard: CreditCardInput
}
export type OrderCustomerRelation = {
  create?: CustomerInput
  connect?: string
}
export type CustomerInput = {
  firstName: string
  lastName: string
  address: AddressInput
  telephone: string
  creditCard: CreditCardInput
}
export type AddressInput = {
  street: string
  city: string
  state: string
  zipCode: string
}
export type CreditCardInput = {
  network: string
  number: string
}
export type ProductLineInput = {
  product: string
  quantity: number
  price: number
}
export type StorehouseInput = {
  name: string
  address: AddressInput
}
export type SubmitOrderProductInput = {
  productId: string
  quantity: number
}
export type ProductInput = {
  name: string
  description: string
  price: number
  storehouse?: ProductStorehouseRelation
  quantity: number
  backorderLimit: number
  backordered: boolean
}
export type ProductStorehouseRelation = {
  create?: StorehouseInput
  connect?: string
}
export type ProductLineProductRelation = {
  create?: ProductInput
  connect?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orderPages: ObservableMap<string, OrderPageModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryFindProductByID="queryFindProductByID",
queryFindOrderByID="queryFindOrderByID",
queryAllCustomers="queryAllCustomers",
queryAllProducts="queryAllProducts",
queryFindStorehouseByID="queryFindStorehouseByID",
queryAllStorehouses="queryAllStorehouses",
queryAllOrders="queryAllOrders",
queryFindCustomerByID="queryFindCustomerByID"
}
export enum RootStoreBaseMutations {
mutateCreateOrder="mutateCreateOrder",
mutateDeleteOrder="mutateDeleteOrder",
mutateUpdateOrder="mutateUpdateOrder",
mutateUpdateCustomer="mutateUpdateCustomer",
mutateCreateStorehouse="mutateCreateStorehouse",
mutateSubmitOrder="mutateSubmitOrder",
mutateDeleteCustomer="mutateDeleteCustomer",
mutateUpdateStorehouse="mutateUpdateStorehouse",
mutateCreateProduct="mutateCreateProduct",
mutateDeleteStorehouse="mutateDeleteStorehouse",
mutateUpdateProduct="mutateUpdateProduct",
mutateCreateCustomer="mutateCreateCustomer",
mutateDeleteProduct="mutateDeleteProduct"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Product', () => ProductModel], ['Storehouse', () => StorehouseModel], ['Address', () => AddressModel], ['Order', () => OrderModel], ['ProductLine', () => ProductLineModel], ['CreditCard', () => CreditCardModel], ['Customer', () => CustomerModel], ['CustomerPage', () => CustomerPageModel], ['ProductPage', () => ProductPageModel], ['StorehousePage', () => StorehousePageModel], ['OrderPage', () => OrderPageModel]], ['OrderPage'], "js"))
  .props({
    orderPages: types.optional(types.map(types.late((): any => OrderPageModel)), {})
  })
  .actions(self => ({
    // Find a document from the collection of 'Product' by its id.
    queryFindProductByID(variables: { id: string }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ findProductByID: ProductModelType}>(`query findProductByID($id: ID!) { findProductByID(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Find a document from the collection of 'Order' by its id.
    queryFindOrderByID(variables: { id: string }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ findOrderByID: OrderModelType}>(`query findOrderByID($id: ID!) { findOrderByID(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllCustomers(variables: { size?: number, cursor?: string }, resultSelector: string | ((qb: CustomerPageModelSelector) => CustomerPageModelSelector) = customerPageModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allCustomers: CustomerPageModelType}>(`query allCustomers($size: Int, $cursor: String) { allCustomers(_size: $size, _cursor: $cursor) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerPageModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllProducts(variables: { size?: number, cursor?: string }, resultSelector: string | ((qb: ProductPageModelSelector) => ProductPageModelSelector) = productPageModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allProducts: ProductPageModelType}>(`query allProducts($size: Int, $cursor: String) { allProducts(_size: $size, _cursor: $cursor) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductPageModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Find a document from the collection of 'Storehouse' by its id.
    queryFindStorehouseByID(variables: { id: string }, resultSelector: string | ((qb: StorehouseModelSelector) => StorehouseModelSelector) = storehouseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ findStorehouseByID: StorehouseModelType}>(`query findStorehouseByID($id: ID!) { findStorehouseByID(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new StorehouseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllStorehouses(variables: { size?: number, cursor?: string }, resultSelector: string | ((qb: StorehousePageModelSelector) => StorehousePageModelSelector) = storehousePageModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allStorehouses: StorehousePageModelType}>(`query allStorehouses($size: Int, $cursor: String) { allStorehouses(_size: $size, _cursor: $cursor) {
        ${typeof resultSelector === "function" ? resultSelector(new StorehousePageModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAllOrders(variables: { size?: number, cursor?: string }, resultSelector: string | ((qb: OrderPageModelSelector) => OrderPageModelSelector) = orderPageModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ allOrders: OrderPageModelType}>(`query allOrders($size: Int, $cursor: String) { allOrders(_size: $size, _cursor: $cursor) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderPageModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Find a document from the collection of 'Customer' by its id.
    queryFindCustomerByID(variables: { id: string }, resultSelector: string | ((qb: CustomerModelSelector) => CustomerModelSelector) = customerModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ findCustomerByID: CustomerModelType}>(`query findCustomerByID($id: ID!) { findCustomerByID(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Create a new document in the collection of 'Order'
    mutateCreateOrder(variables: { data: OrderInput }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createOrder: OrderModelType}>(`mutation createOrder($data: OrderInput!) { createOrder(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Delete an existing document in the collection of 'Order'
    mutateDeleteOrder(variables: { id: string }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrder: OrderModelType}>(`mutation deleteOrder($id: ID!) { deleteOrder(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing document in the collection of 'Order'
    mutateUpdateOrder(variables: { id: string, data: OrderInput }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrder: OrderModelType}>(`mutation updateOrder($id: ID!, $data: OrderInput!) { updateOrder(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing document in the collection of 'Customer'
    mutateUpdateCustomer(variables: { id: string, data: CustomerInput }, resultSelector: string | ((qb: CustomerModelSelector) => CustomerModelSelector) = customerModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCustomer: CustomerModelType}>(`mutation updateCustomer($id: ID!, $data: CustomerInput!) { updateCustomer(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Create a new document in the collection of 'Storehouse'
    mutateCreateStorehouse(variables: { data: StorehouseInput }, resultSelector: string | ((qb: StorehouseModelSelector) => StorehouseModelSelector) = storehouseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createStorehouse: StorehouseModelType}>(`mutation createStorehouse($data: StorehouseInput!) { createStorehouse(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new StorehouseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSubmitOrder(variables: { customerId: string, products?: SubmitOrderProductInput[] }, resultSelector: string | ((qb: OrderModelSelector) => OrderModelSelector) = orderModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ submitOrder: OrderModelType}>(`mutation submitOrder($customerId: ID!, $products: [SubmitOrderProductInput]) { submitOrder(customerId: $customerId, products: $products) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Delete an existing document in the collection of 'Customer'
    mutateDeleteCustomer(variables: { id: string }, resultSelector: string | ((qb: CustomerModelSelector) => CustomerModelSelector) = customerModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCustomer: CustomerModelType}>(`mutation deleteCustomer($id: ID!) { deleteCustomer(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing document in the collection of 'Storehouse'
    mutateUpdateStorehouse(variables: { id: string, data: StorehouseInput }, resultSelector: string | ((qb: StorehouseModelSelector) => StorehouseModelSelector) = storehouseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateStorehouse: StorehouseModelType}>(`mutation updateStorehouse($id: ID!, $data: StorehouseInput!) { updateStorehouse(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new StorehouseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Create a new document in the collection of 'Product'
    mutateCreateProduct(variables: { data: ProductInput }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createProduct: ProductModelType}>(`mutation createProduct($data: ProductInput!) { createProduct(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Delete an existing document in the collection of 'Storehouse'
    mutateDeleteStorehouse(variables: { id: string }, resultSelector: string | ((qb: StorehouseModelSelector) => StorehouseModelSelector) = storehouseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteStorehouse: StorehouseModelType}>(`mutation deleteStorehouse($id: ID!) { deleteStorehouse(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new StorehouseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Update an existing document in the collection of 'Product'
    mutateUpdateProduct(variables: { id: string, data: ProductInput }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateProduct: ProductModelType}>(`mutation updateProduct($id: ID!, $data: ProductInput!) { updateProduct(id: $id, data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Create a new document in the collection of 'Customer'
    mutateCreateCustomer(variables: { data: CustomerInput }, resultSelector: string | ((qb: CustomerModelSelector) => CustomerModelSelector) = customerModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createCustomer: CustomerModelType}>(`mutation createCustomer($data: CustomerInput!) { createCustomer(data: $data) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomerModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Delete an existing document in the collection of 'Product'
    mutateDeleteProduct(variables: { id: string }, resultSelector: string | ((qb: ProductModelSelector) => ProductModelSelector) = productModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteProduct: ProductModelType}>(`mutation deleteProduct($id: ID!) { deleteProduct(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ProductModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
