/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShortUrls = /* GraphQL */ `
  subscription OnCreateShortUrls(
    $filter: ModelSubscriptionShortUrlsFilterInput
  ) {
    onCreateShortUrls(filter: $filter) {
      id
      destination
      shortened
      requests
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateShortUrls = /* GraphQL */ `
  subscription OnUpdateShortUrls(
    $filter: ModelSubscriptionShortUrlsFilterInput
  ) {
    onUpdateShortUrls(filter: $filter) {
      id
      destination
      shortened
      requests
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteShortUrls = /* GraphQL */ `
  subscription OnDeleteShortUrls(
    $filter: ModelSubscriptionShortUrlsFilterInput
  ) {
    onDeleteShortUrls(filter: $filter) {
      id
      destination
      shortened
      requests
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
