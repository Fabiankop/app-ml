export interface RESTProductResponse {
    site_id:           string;
    query:             string;
    paging:            Paging;
    results:           Result[];
    secondary_results: any[];
    related_results:   any[];
    sort:              Sort;
    available_sorts:   Sort[];
    filters:           Filter[];
    available_filters: AvailableFilter[];
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   null | string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   string;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface Result {
    id:                  string;
    site_id:             string;
    title:               string;
    seller:              Seller;
    price:               number;
    prices:              Prices;
    sale_price:          null;
    currency_id:         string;
    available_quantity:  number;
    sold_quantity:       number;
    buying_mode:         string;
    listing_type_id:     string;
    stop_time:           Date;
    condition:           string;
    permalink:           string;
    thumbnail:           string;
    thumbnail_id:        string;
    accepts_mercadopago: boolean;
    installments:        Installments;
    address:             Address;
    shipping:            Shipping;
    seller_address:      SellerAddress;
    attributes:          Attribute[];
    original_price:      null;
    category_id:         string;
    official_store_id:   null;
    domain_id:           string;
    catalog_product_id:  null;
    tags:                string[];
    order_backend:       number;
    use_thumbnail_id:    boolean;
}

export interface Address {
    state_id:   string;
    state_name: string;
    city_id:    null;
    city_name:  string;
}

export interface Attribute {
    value_struct:         null;
    values:               AttributeValue[];
    attribute_group_name: AttributeGroupName;
    source:               number;
    id:                   string;
    name:                 string;
    attribute_group_id:   AttributeGroupID;
    value_id:             null | string;
    value_name:           string;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export interface AttributeValue {
    id:     null | string;
    name:   string;
    struct: null;
    source: number;
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: string;
}

export interface Prices {
    id:                    string;
    prices:                Price[];
    presentation:          Presentation;
    payment_method_prices: any[];
    reference_prices:      any[];
    purchase_discounts:    any[];
}

export interface Presentation {
    display_currency: string;
}

export interface Price {
    id:                    string;
    type:                  string;
    conditions:            Conditions;
    amount:                number;
    regular_amount:        null;
    currency_id:           string;
    exchange_rate_context: string;
    metadata:              Metadata;
    last_updated:          Date;
}

export interface Conditions {
    context_restrictions: any[];
    start_time:           null;
    end_time:             null;
    eligible:             boolean;
}

export interface Metadata {
}

export interface Seller {
    id:                 number;
    permalink:          string;
    registration_date:  Date;
    car_dealer:         boolean;
    real_estate_agency: boolean;
    tags:               string[];
    seller_reputation:  SellerReputation;
}

export interface SellerReputation {
    transactions:        Transactions;
    power_seller_status: null | string;
    metrics:             Metrics;
    level_id:            string;
}

export interface Metrics {
    claims:                Cancellations;
    delayed_handling_time: Cancellations;
    sales:                 Sales;
    cancellations:         Cancellations;
}

export interface Cancellations {
    rate:   number;
    value:  number;
    period: Period;
}

export enum Period {
    The365Days = "365 days",
    The60Days = "60 days",
}

export interface Sales {
    period:    Period;
    completed: number;
}

export interface Transactions {
    total:     number;
    canceled:  number;
    period:    string;
    ratings:   Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    positive: number;
    neutral:  number;
}

export interface SellerAddress {
    id:           string;
    comment:      string;
    address_line: string;
    zip_code:     string;
    country:      Sort;
    state:        Sort;
    city:         Sort;
    latitude:     string;
    longitude:    string;
}

export interface Shipping {
    free_shipping: boolean;
    mode:          string;
    tags:          string[];
    logistic_type: string;
    store_pick_up: boolean;
}
