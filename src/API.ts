/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShortUrlsInput = {
  id?: string | null,
  destination: string,
  shortened: string,
  requests?: number | null,
  _version?: number | null,
};

export type ModelShortUrlsConditionInput = {
  destination?: ModelStringInput | null,
  shortened?: ModelStringInput | null,
  requests?: ModelIntInput | null,
  and?: Array< ModelShortUrlsConditionInput | null > | null,
  or?: Array< ModelShortUrlsConditionInput | null > | null,
  not?: ModelShortUrlsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ShortUrls = {
  __typename: "ShortUrls",
  id: string,
  destination: string,
  shortened: string,
  requests?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateShortUrlsInput = {
  id: string,
  destination?: string | null,
  shortened?: string | null,
  requests?: number | null,
  _version?: number | null,
};

export type DeleteShortUrlsInput = {
  id: string,
  _version?: number | null,
};

export type ModelShortUrlsFilterInput = {
  id?: ModelIDInput | null,
  destination?: ModelStringInput | null,
  shortened?: ModelStringInput | null,
  requests?: ModelIntInput | null,
  and?: Array< ModelShortUrlsFilterInput | null > | null,
  or?: Array< ModelShortUrlsFilterInput | null > | null,
  not?: ModelShortUrlsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelShortUrlsConnection = {
  __typename: "ModelShortUrlsConnection",
  items:  Array<ShortUrls | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionShortUrlsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  destination?: ModelSubscriptionStringInput | null,
  shortened?: ModelSubscriptionStringInput | null,
  requests?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionShortUrlsFilterInput | null > | null,
  or?: Array< ModelSubscriptionShortUrlsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateShortUrlsMutationVariables = {
  input: CreateShortUrlsInput,
  condition?: ModelShortUrlsConditionInput | null,
};

export type CreateShortUrlsMutation = {
  createShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateShortUrlsMutationVariables = {
  input: UpdateShortUrlsInput,
  condition?: ModelShortUrlsConditionInput | null,
};

export type UpdateShortUrlsMutation = {
  updateShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteShortUrlsMutationVariables = {
  input: DeleteShortUrlsInput,
  condition?: ModelShortUrlsConditionInput | null,
};

export type DeleteShortUrlsMutation = {
  deleteShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetShortUrlsQueryVariables = {
  id: string,
};

export type GetShortUrlsQuery = {
  getShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListShortUrlsQueryVariables = {
  filter?: ModelShortUrlsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShortUrlsQuery = {
  listShortUrls?:  {
    __typename: "ModelShortUrlsConnection",
    items:  Array< {
      __typename: "ShortUrls",
      id: string,
      destination: string,
      shortened: string,
      requests?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncShortUrlsQueryVariables = {
  filter?: ModelShortUrlsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncShortUrlsQuery = {
  syncShortUrls?:  {
    __typename: "ModelShortUrlsConnection",
    items:  Array< {
      __typename: "ShortUrls",
      id: string,
      destination: string,
      shortened: string,
      requests?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateShortUrlsSubscriptionVariables = {
  filter?: ModelSubscriptionShortUrlsFilterInput | null,
};

export type OnCreateShortUrlsSubscription = {
  onCreateShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateShortUrlsSubscriptionVariables = {
  filter?: ModelSubscriptionShortUrlsFilterInput | null,
};

export type OnUpdateShortUrlsSubscription = {
  onUpdateShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteShortUrlsSubscriptionVariables = {
  filter?: ModelSubscriptionShortUrlsFilterInput | null,
};

export type OnDeleteShortUrlsSubscription = {
  onDeleteShortUrls?:  {
    __typename: "ShortUrls",
    id: string,
    destination: string,
    shortened: string,
    requests?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
