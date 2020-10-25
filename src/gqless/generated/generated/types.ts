import * as extensions from '../extensions';
import {
  TypeData,
  ScalarType,
  FieldsType,
  FieldsTypeArg,
  EnumType,
} from 'gqless';

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name AddressInput
 * @type INPUT_OBJECT
 */
export type AddressInput = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

/**
 * @name CreditCardInput
 * @type INPUT_OBJECT
 */
export type CreditCardInput = { network: string; number: string };

/**
 * @name CustomerInput
 * @type INPUT_OBJECT
 */
export type CustomerInput = {
  firstName: string;
  lastName: string;
  address: AddressInput;
  telephone: string;
  creditCard: CreditCardInput;
};

/**
 * @name Date
 * @type SCALAR
 */
type t_Date<T extends string = string> = ScalarType<T, Extension<'Date'>>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<'Mutation'>;

    /**
     * Create a new document in the collection of 'Order'
     */
    createOrder: FieldsTypeArg<{ data: OrderInput }, t_Order>;

    /**
     * Delete an existing document in the collection of 'Order'
     */
    deleteOrder: FieldsTypeArg<{ id: string }, t_Order | null>;

    /**
     * Update an existing document in the collection of 'Order'
     */
    updateOrder: FieldsTypeArg<
      { id: string; data: OrderInput },
      t_Order | null
    >;

    /**
     * Update an existing document in the collection of 'Customer'
     */
    updateCustomer: FieldsTypeArg<
      { id: string; data: CustomerInput },
      t_Customer | null
    >;

    /**
     * Create a new document in the collection of 'Storehouse'
     */
    createStorehouse: FieldsTypeArg<{ data: StorehouseInput }, t_Storehouse>;
    submitOrder: FieldsTypeArg<
      {
        customerId: string;
        products?: (SubmitOrderProductInput | null)[] | null;
      },
      t_Order
    >;

    /**
     * Delete an existing document in the collection of 'Customer'
     */
    deleteCustomer: FieldsTypeArg<{ id: string }, t_Customer | null>;

    /**
     * Update an existing document in the collection of 'Storehouse'
     */
    updateStorehouse: FieldsTypeArg<
      { id: string; data: StorehouseInput },
      t_Storehouse | null
    >;

    /**
     * Create a new document in the collection of 'Product'
     */
    createProduct: FieldsTypeArg<{ data: ProductInput }, t_Product>;

    /**
     * Delete an existing document in the collection of 'Storehouse'
     */
    deleteStorehouse: FieldsTypeArg<{ id: string }, t_Storehouse | null>;

    /**
     * Update an existing document in the collection of 'Product'
     */
    updateProduct: FieldsTypeArg<
      { id: string; data: ProductInput },
      t_Product | null
    >;

    /**
     * Create a new document in the collection of 'Customer'
     */
    createCustomer: FieldsTypeArg<{ data: CustomerInput }, t_Customer>;

    /**
     * Delete an existing document in the collection of 'Product'
     */
    deleteProduct: FieldsTypeArg<{ id: string }, t_Product | null>;
  },
  Extension<'Mutation'>
>;

/**
 * @name OrderCustomerRelation
 * @type INPUT_OBJECT
 */
export type OrderCustomerRelation = {
  create?: CustomerInput | null;
  connect?: string | null;
};

/**
 * @name OrderInput
 * @type INPUT_OBJECT
 */
export type OrderInput = {
  customer?: OrderCustomerRelation | null;
  line: ProductLineInput[];
  status: string;
  creationDate: any;
  shipDate?: any | null;
  shipAddress: AddressInput;
  creditCard: CreditCardInput;
};

/**
 * @name ProductInput
 * @type INPUT_OBJECT
 */
export type ProductInput = {
  name: string;
  description: string;
  price: number;
  storehouse?: ProductStorehouseRelation | null;
  quantity: number;
  backorderLimit: number;
  backordered: boolean;
};

/**
 * @name ProductLineInput
 * @type INPUT_OBJECT
 */
export type ProductLineInput = {
  product: string;
  quantity: number;
  price: number;
};

/**
 * @name ProductLineProductRelation
 * @type INPUT_OBJECT
 */
export type ProductLineProductRelation = {
  create?: ProductInput | null;
  connect?: string | null;
};

/**
 * @name ProductStorehouseRelation
 * @type INPUT_OBJECT
 */
export type ProductStorehouseRelation = {
  create?: StorehouseInput | null;
  connect?: string | null;
};

/**
 * @name StorehouseInput
 * @type INPUT_OBJECT
 */
export type StorehouseInput = { name: string; address: AddressInput };

/**
 * @name SubmitOrderProductInput
 * @type INPUT_OBJECT
 */
export type SubmitOrderProductInput = { productId: string; quantity: number };

/**
 * @name Address
 * @type OBJECT
 */
type t_Address = FieldsType<
  {
    __typename: t_String<'Address'>;
    street: t_String;
    city: t_String;
    state: t_String;
    zipCode: t_String;
  },
  Extension<'Address'>
>;

/**
 * @name CreditCard
 * @type OBJECT
 */
type t_CreditCard = FieldsType<
  {
    __typename: t_String<'CreditCard'>;
    network: t_String;
    number: t_String;
  },
  Extension<'CreditCard'>
>;

/**
 * @name Customer
 * @type OBJECT
 */
type t_Customer = FieldsType<
  {
    __typename: t_String<'Customer'>;

    /**
     * The document's ID.
     */
    _id: t_ID;
    lastName: t_String;
    firstName: t_String;
    creditCard: t_CreditCard;
    address: t_Address;
    telephone: t_String;

    /**
     * The document's timestamp.
     */
    _ts: t_Long;
  },
  Extension<'Customer'>
>;

/**
 * @name CustomerPage
 * @type OBJECT
 */
type t_CustomerPage = FieldsType<
  {
    __typename: t_String<'CustomerPage'>;

    /**
     * The elements of type 'Customer' in this page.
     */
    data: (t_Customer | null)[];

    /**
     * A cursor for elements coming after the current page.
     */
    after?: t_String | null;

    /**
     * A cursor for elements coming before the current page.
     */
    before?: t_String | null;
  },
  Extension<'CustomerPage'>
>;

/**
 * @name Order
 * @type OBJECT
 */
type t_Order = FieldsType<
  {
    __typename: t_String<'Order'>;
    shipDate?: t_Time | null;
    line: t_ProductLine[];

    /**
     * The document's ID.
     */
    _id: t_ID;
    shipAddress: t_Address;
    creditCard: t_CreditCard;
    status: t_String;
    customer: t_Customer;
    creationDate: t_Time;

    /**
     * The document's timestamp.
     */
    _ts: t_Long;
  },
  Extension<'Order'>
>;

/**
 * @name OrderPage
 * @type OBJECT
 */
type t_OrderPage = FieldsType<
  {
    __typename: t_String<'OrderPage'>;

    /**
     * The elements of type 'Order' in this page.
     */
    data: (t_Order | null)[];

    /**
     * A cursor for elements coming after the current page.
     */
    after?: t_String | null;

    /**
     * A cursor for elements coming before the current page.
     */
    before?: t_String | null;
  },
  Extension<'OrderPage'>
>;

/**
 * @name Product
 * @type OBJECT
 */
type t_Product = FieldsType<
  {
    __typename: t_String<'Product'>;
    name: t_String;
    quantity: t_Int;
    backorderLimit: t_Int;
    description: t_String;

    /**
     * The document's ID.
     */
    _id: t_ID;
    price: t_Float;
    storehouse: t_Storehouse;
    backordered: t_Boolean;

    /**
     * The document's timestamp.
     */
    _ts: t_Long;
  },
  Extension<'Product'>
>;

/**
 * @name ProductLine
 * @type OBJECT
 */
type t_ProductLine = FieldsType<
  {
    __typename: t_String<'ProductLine'>;
    product: t_Product;
    quantity: t_Int;
    price: t_Float;
  },
  Extension<'ProductLine'>
>;

/**
 * @name ProductPage
 * @type OBJECT
 */
type t_ProductPage = FieldsType<
  {
    __typename: t_String<'ProductPage'>;

    /**
     * The elements of type 'Product' in this page.
     */
    data: (t_Product | null)[];

    /**
     * A cursor for elements coming after the current page.
     */
    after?: t_String | null;

    /**
     * A cursor for elements coming before the current page.
     */
    before?: t_String | null;
  },
  Extension<'ProductPage'>
>;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<'Query'>;

    /**
     * Find a document from the collection of 'Product' by its id.
     */
    findProductByID: FieldsTypeArg<{ id: string }, t_Product | null>;

    /**
     * Find a document from the collection of 'Order' by its id.
     */
    findOrderByID: FieldsTypeArg<{ id: string }, t_Order | null>;
    allCustomers: FieldsTypeArg<
      { _size?: number | null; _cursor?: string | null },
      t_CustomerPage
    >;
    allProducts: FieldsTypeArg<
      { _size?: number | null; _cursor?: string | null },
      t_ProductPage
    >;

    /**
     * Find a document from the collection of 'Storehouse' by its id.
     */
    findStorehouseByID: FieldsTypeArg<{ id: string }, t_Storehouse | null>;
    allStorehouses: FieldsTypeArg<
      { _size?: number | null; _cursor?: string | null },
      t_StorehousePage
    >;
    allOrders: FieldsTypeArg<
      { _size?: number | null; _cursor?: string | null },
      t_OrderPage
    >;

    /**
     * Find a document from the collection of 'Customer' by its id.
     */
    findCustomerByID: FieldsTypeArg<{ id: string }, t_Customer | null>;
  },
  Extension<'Query'>
>;

/**
 * @name Storehouse
 * @type OBJECT
 */
type t_Storehouse = FieldsType<
  {
    __typename: t_String<'Storehouse'>;

    /**
     * The document's ID.
     */
    _id: t_ID;

    /**
     * The document's timestamp.
     */
    _ts: t_Long;
    name: t_String;
    address: t_Address;
  },
  Extension<'Storehouse'>
>;

/**
 * @name StorehousePage
 * @type OBJECT
 */
type t_StorehousePage = FieldsType<
  {
    __typename: t_String<'StorehousePage'>;

    /**
     * The elements of type 'Storehouse' in this page.
     */
    data: (t_Storehouse | null)[];

    /**
     * A cursor for elements coming after the current page.
     */
    after?: t_String | null;

    /**
     * A cursor for elements coming before the current page.
     */
    before?: t_String | null;
  },
  Extension<'StorehousePage'>
>;

/**
 * @name Time
 * @type SCALAR
 */
type t_Time<T extends any = any> = ScalarType<T, Extension<'Time'>>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];

    /**
     * @deprecated Use `locations`.
     */
    onOperation: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onFragment: t_Boolean;

    /**
     * @deprecated Use `locations`.
     */
    onField: t_Boolean;
  },
  Extension<'__Directive'>
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | 'QUERY'
  | 'MUTATION'
  | 'SUBSCRIPTION'
  | 'FIELD'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'SCHEMA'
  | 'SCALAR'
  | 'OBJECT'
  | 'FIELD_DEFINITION'
  | 'ARGUMENT_DEFINITION'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'INPUT_OBJECT'
  | 'INPUT_FIELD_DEFINITION'
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<'__EnumValue'>
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<'__Field'>
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<'__InputValue'>
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<'__Schema'>
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<'__Type'>;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<'__Type'>
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL'
>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>;

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<'Float'>>;

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<'ID'>>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>;

/**
 * @name Long
 * @type SCALAR
 */
type t_Long<T extends any = any> = ScalarType<T, Extension<'Long'>>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>;

/**
 * @name Date
 * @type SCALAR
 */
export type Date = TypeData<t_Date>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name Address
 * @type OBJECT
 */
export type Address = TypeData<t_Address>;

/**
 * @name CreditCard
 * @type OBJECT
 */
export type CreditCard = TypeData<t_CreditCard>;

/**
 * @name Customer
 * @type OBJECT
 */
export type Customer = TypeData<t_Customer>;

/**
 * @name CustomerPage
 * @type OBJECT
 */
export type CustomerPage = TypeData<t_CustomerPage>;

/**
 * @name Order
 * @type OBJECT
 */
export type Order = TypeData<t_Order>;

/**
 * @name OrderPage
 * @type OBJECT
 */
export type OrderPage = TypeData<t_OrderPage>;

/**
 * @name Product
 * @type OBJECT
 */
export type Product = TypeData<t_Product>;

/**
 * @name ProductLine
 * @type OBJECT
 */
export type ProductLine = TypeData<t_ProductLine>;

/**
 * @name ProductPage
 * @type OBJECT
 */
export type ProductPage = TypeData<t_ProductPage>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name Storehouse
 * @type OBJECT
 */
export type Storehouse = TypeData<t_Storehouse>;

/**
 * @name StorehousePage
 * @type OBJECT
 */
export type StorehousePage = TypeData<t_StorehousePage>;

/**
 * @name Time
 * @type SCALAR
 */
export type Time = TypeData<t_Time>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = 'QUERY',
  MUTATION = 'MUTATION',
  SUBSCRIPTION = 'SUBSCRIPTION',
  FIELD = 'FIELD',
  FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT = 'INLINE_FRAGMENT',
  SCHEMA = 'SCHEMA',
  SCALAR = 'SCALAR',
  OBJECT = 'OBJECT',
  FIELD_DEFINITION = 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
  INTERFACE = 'INTERFACE',
  UNION = 'UNION',
  ENUM = 'ENUM',
  ENUM_VALUE = 'ENUM_VALUE',
  INPUT_OBJECT = 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION',
}

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = 'SCALAR',
  OBJECT = 'OBJECT',
  INTERFACE = 'INTERFACE',
  UNION = 'UNION',
  ENUM = 'ENUM',
  INPUT_OBJECT = 'INPUT_OBJECT',
  LIST = 'LIST',
  NON_NULL = 'NON_NULL',
}

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Long
 * @type SCALAR
 */
export type Long = TypeData<t_Long>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;
