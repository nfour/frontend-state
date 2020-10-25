// @ts-nocheck
import * as extensions from '../extensions';
import { lazyGetters } from '@gqless/utils';
import {
  InputNode,
  InputNodeField,
  ArrayNode,
  ScalarNode,
  ObjectNode,
  FieldNode,
  Arguments,
  ArgumentsField,
  EnumNode,
} from 'gqless';

export const schema = {
  get AddressInput() {
    return new InputNode(
      {
        get street() {
          return new InputNodeField(schema.String, false);
        },
        get city() {
          return new InputNodeField(schema.String, false);
        },
        get state() {
          return new InputNodeField(schema.String, false);
        },
        get zipCode() {
          return new InputNodeField(schema.String, false);
        },
      },
      { name: 'AddressInput' },
    );
  },
  get CreditCardInput() {
    return new InputNode(
      {
        get network() {
          return new InputNodeField(schema.String, false);
        },
        get number() {
          return new InputNodeField(schema.String, false);
        },
      },
      { name: 'CreditCardInput' },
    );
  },
  get CustomerInput() {
    return new InputNode(
      {
        get firstName() {
          return new InputNodeField(schema.String, false);
        },
        get lastName() {
          return new InputNodeField(schema.String, false);
        },
        get address() {
          return new InputNodeField(schema.AddressInput, false);
        },
        get telephone() {
          return new InputNodeField(schema.String, false);
        },
        get creditCard() {
          return new InputNodeField(schema.CreditCardInput, false);
        },
      },
      { name: 'CustomerInput' },
    );
  },
  get Date() {
    return new ScalarNode({
      name: 'Date',
      extension: ((extensions as any) || {}).Date,
    });
  },
  get Mutation() {
    return new ObjectNode(
      {
        get createOrder() {
          return new FieldNode(
            schema.Order,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.OrderInput, false);
                },
              },
              true,
            ),
            false,
          );
        },
        get deleteOrder() {
          return new FieldNode(
            schema.Order,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get updateOrder() {
          return new FieldNode(
            schema.Order,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
                get data() {
                  return new ArgumentsField(schema.OrderInput, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get updateCustomer() {
          return new FieldNode(
            schema.Customer,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
                get data() {
                  return new ArgumentsField(schema.CustomerInput, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get createStorehouse() {
          return new FieldNode(
            schema.Storehouse,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.StorehouseInput, false);
                },
              },
              true,
            ),
            false,
          );
        },
        get submitOrder() {
          return new FieldNode(
            schema.Order,
            new Arguments({
              get customerId() {
                return new ArgumentsField(schema.ID, false);
              },
              get products() {
                return new ArgumentsField(
                  new ArrayNode(schema.SubmitOrderProductInput, true),
                  true,
                );
              },
            }),
            false,
          );
        },
        get deleteCustomer() {
          return new FieldNode(
            schema.Customer,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get updateStorehouse() {
          return new FieldNode(
            schema.Storehouse,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
                get data() {
                  return new ArgumentsField(schema.StorehouseInput, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get createProduct() {
          return new FieldNode(
            schema.Product,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.ProductInput, false);
                },
              },
              true,
            ),
            false,
          );
        },
        get deleteStorehouse() {
          return new FieldNode(
            schema.Storehouse,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get updateProduct() {
          return new FieldNode(
            schema.Product,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
                get data() {
                  return new ArgumentsField(schema.ProductInput, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get createCustomer() {
          return new FieldNode(
            schema.Customer,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.CustomerInput, false);
                },
              },
              true,
            ),
            false,
          );
        },
        get deleteProduct() {
          return new FieldNode(
            schema.Product,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
      },
      { name: 'Mutation', extension: ((extensions as any) || {}).Mutation },
    );
  },
  get OrderCustomerRelation() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.CustomerInput, true);
        },
        get connect() {
          return new InputNodeField(schema.ID, true);
        },
      },
      { name: 'OrderCustomerRelation' },
    );
  },
  get OrderInput() {
    return new InputNode(
      {
        get customer() {
          return new InputNodeField(schema.OrderCustomerRelation, true);
        },
        get line() {
          return new InputNodeField(
            new ArrayNode(schema.ProductLineInput, false),
            false,
          );
        },
        get status() {
          return new InputNodeField(schema.String, false);
        },
        get creationDate() {
          return new InputNodeField(schema.Time, false);
        },
        get shipDate() {
          return new InputNodeField(schema.Time, true);
        },
        get shipAddress() {
          return new InputNodeField(schema.AddressInput, false);
        },
        get creditCard() {
          return new InputNodeField(schema.CreditCardInput, false);
        },
      },
      { name: 'OrderInput' },
    );
  },
  get ProductInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        },
        get description() {
          return new InputNodeField(schema.String, false);
        },
        get price() {
          return new InputNodeField(schema.Float, false);
        },
        get storehouse() {
          return new InputNodeField(schema.ProductStorehouseRelation, true);
        },
        get quantity() {
          return new InputNodeField(schema.Int, false);
        },
        get backorderLimit() {
          return new InputNodeField(schema.Int, false);
        },
        get backordered() {
          return new InputNodeField(schema.Boolean, false);
        },
      },
      { name: 'ProductInput' },
    );
  },
  get ProductLineInput() {
    return new InputNode(
      {
        get product() {
          return new InputNodeField(schema.ID, false);
        },
        get quantity() {
          return new InputNodeField(schema.Int, false);
        },
        get price() {
          return new InputNodeField(schema.Float, false);
        },
      },
      { name: 'ProductLineInput' },
    );
  },
  get ProductLineProductRelation() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.ProductInput, true);
        },
        get connect() {
          return new InputNodeField(schema.ID, true);
        },
      },
      { name: 'ProductLineProductRelation' },
    );
  },
  get ProductStorehouseRelation() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.StorehouseInput, true);
        },
        get connect() {
          return new InputNodeField(schema.ID, true);
        },
      },
      { name: 'ProductStorehouseRelation' },
    );
  },
  get StorehouseInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        },
        get address() {
          return new InputNodeField(schema.AddressInput, false);
        },
      },
      { name: 'StorehouseInput' },
    );
  },
  get SubmitOrderProductInput() {
    return new InputNode(
      {
        get productId() {
          return new InputNodeField(schema.ID, false);
        },
        get quantity() {
          return new InputNodeField(schema.Int, false);
        },
      },
      { name: 'SubmitOrderProductInput' },
    );
  },
  get Address() {
    return new ObjectNode(
      {
        get street() {
          return new FieldNode(schema.String, undefined, false);
        },
        get city() {
          return new FieldNode(schema.String, undefined, false);
        },
        get state() {
          return new FieldNode(schema.String, undefined, false);
        },
        get zipCode() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      { name: 'Address', extension: ((extensions as any) || {}).Address },
    );
  },
  get CreditCard() {
    return new ObjectNode(
      {
        get network() {
          return new FieldNode(schema.String, undefined, false);
        },
        get number() {
          return new FieldNode(schema.String, undefined, false);
        },
      },
      { name: 'CreditCard', extension: ((extensions as any) || {}).CreditCard },
    );
  },
  get Customer() {
    return new ObjectNode(
      {
        get _id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get lastName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get firstName() {
          return new FieldNode(schema.String, undefined, false);
        },
        get creditCard() {
          return new FieldNode(schema.CreditCard, undefined, false);
        },
        get address() {
          return new FieldNode(schema.Address, undefined, false);
        },
        get telephone() {
          return new FieldNode(schema.String, undefined, false);
        },
        get _ts() {
          return new FieldNode(schema.Long, undefined, false);
        },
      },
      { name: 'Customer', extension: ((extensions as any) || {}).Customer },
    );
  },
  get CustomerPage() {
    return new ObjectNode(
      {
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Customer, false),
            undefined,
            false,
          );
        },
        get after() {
          return new FieldNode(schema.String, undefined, true);
        },
        get before() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'CustomerPage',
        extension: ((extensions as any) || {}).CustomerPage,
      },
    );
  },
  get Order() {
    return new ObjectNode(
      {
        get shipDate() {
          return new FieldNode(schema.Time, undefined, true);
        },
        get line() {
          return new FieldNode(
            new ArrayNode(schema.ProductLine, false),
            undefined,
            false,
          );
        },
        get _id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get shipAddress() {
          return new FieldNode(schema.Address, undefined, false);
        },
        get creditCard() {
          return new FieldNode(schema.CreditCard, undefined, false);
        },
        get status() {
          return new FieldNode(schema.String, undefined, false);
        },
        get customer() {
          return new FieldNode(schema.Customer, undefined, false);
        },
        get creationDate() {
          return new FieldNode(schema.Time, undefined, false);
        },
        get _ts() {
          return new FieldNode(schema.Long, undefined, false);
        },
      },
      { name: 'Order', extension: ((extensions as any) || {}).Order },
    );
  },
  get OrderPage() {
    return new ObjectNode(
      {
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Order, false),
            undefined,
            false,
          );
        },
        get after() {
          return new FieldNode(schema.String, undefined, true);
        },
        get before() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      { name: 'OrderPage', extension: ((extensions as any) || {}).OrderPage },
    );
  },
  get Product() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get quantity() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get backorderLimit() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, false);
        },
        get _id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, false);
        },
        get storehouse() {
          return new FieldNode(schema.Storehouse, undefined, false);
        },
        get backordered() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get _ts() {
          return new FieldNode(schema.Long, undefined, false);
        },
      },
      { name: 'Product', extension: ((extensions as any) || {}).Product },
    );
  },
  get ProductLine() {
    return new ObjectNode(
      {
        get product() {
          return new FieldNode(schema.Product, undefined, false);
        },
        get quantity() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get price() {
          return new FieldNode(schema.Float, undefined, false);
        },
      },
      {
        name: 'ProductLine',
        extension: ((extensions as any) || {}).ProductLine,
      },
    );
  },
  get ProductPage() {
    return new ObjectNode(
      {
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Product, false),
            undefined,
            false,
          );
        },
        get after() {
          return new FieldNode(schema.String, undefined, true);
        },
        get before() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'ProductPage',
        extension: ((extensions as any) || {}).ProductPage,
      },
    );
  },
  get Query() {
    return new ObjectNode(
      {
        get findProductByID() {
          return new FieldNode(
            schema.Product,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get findOrderByID() {
          return new FieldNode(
            schema.Order,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get allCustomers() {
          return new FieldNode(
            schema.CustomerPage,
            new Arguments({
              get _size() {
                return new ArgumentsField(schema.Int, true);
              },
              get _cursor() {
                return new ArgumentsField(schema.String, true);
              },
            }),
            false,
          );
        },
        get allProducts() {
          return new FieldNode(
            schema.ProductPage,
            new Arguments({
              get _size() {
                return new ArgumentsField(schema.Int, true);
              },
              get _cursor() {
                return new ArgumentsField(schema.String, true);
              },
            }),
            false,
          );
        },
        get findStorehouseByID() {
          return new FieldNode(
            schema.Storehouse,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
        get allStorehouses() {
          return new FieldNode(
            schema.StorehousePage,
            new Arguments({
              get _size() {
                return new ArgumentsField(schema.Int, true);
              },
              get _cursor() {
                return new ArgumentsField(schema.String, true);
              },
            }),
            false,
          );
        },
        get allOrders() {
          return new FieldNode(
            schema.OrderPage,
            new Arguments({
              get _size() {
                return new ArgumentsField(schema.Int, true);
              },
              get _cursor() {
                return new ArgumentsField(schema.String, true);
              },
            }),
            false,
          );
        },
        get findCustomerByID() {
          return new FieldNode(
            schema.Customer,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                },
              },
              true,
            ),
            true,
          );
        },
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query },
    );
  },
  get Storehouse() {
    return new ObjectNode(
      {
        get _id() {
          return new FieldNode(schema.ID, undefined, false);
        },
        get _ts() {
          return new FieldNode(schema.Long, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get address() {
          return new FieldNode(schema.Address, undefined, false);
        },
      },
      { name: 'Storehouse', extension: ((extensions as any) || {}).Storehouse },
    );
  },
  get StorehousePage() {
    return new ObjectNode(
      {
        get data() {
          return new FieldNode(
            new ArrayNode(schema.Storehouse, false),
            undefined,
            false,
          );
        },
        get after() {
          return new FieldNode(schema.String, undefined, true);
        },
        get before() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: 'StorehousePage',
        extension: ((extensions as any) || {}).StorehousePage,
      },
    );
  },
  get Time() {
    return new ScalarNode({
      name: 'Time',
      extension: ((extensions as any) || {}).Time,
    });
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false,
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false,
          );
        },
        get onOperation() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onFragment() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get onField() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive,
      },
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: '__DirectiveLocation' });
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue,
      },
    );
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false,
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field },
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue,
      },
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false,
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false,
          );
        },
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema },
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true,
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true,
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true,
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true,
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type },
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: '__TypeKind' });
  },
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean,
    });
  },
  get Float() {
    return new ScalarNode({
      name: 'Float',
      extension: ((extensions as any) || {}).Float,
    });
  },
  get ID() {
    return new ScalarNode({
      name: 'ID',
      extension: ((extensions as any) || {}).ID,
    });
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    });
  },
  get Long() {
    return new ScalarNode({
      name: 'Long',
      extension: ((extensions as any) || {}).Long,
    });
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    });
  },
};

lazyGetters(schema);
