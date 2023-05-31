/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCountShortUrls = /* GraphQL */ `
  query GetCountShortUrls {
    getCountShortUrls
  }
`
export const getShortUrls = /* GraphQL */ `
  query GetShortUrls($id: ID!) {
    getShortUrls(id: $id) {
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
`
export const listShortUrls = /* GraphQL */ `
  query ListShortUrls($filter: ModelShortUrlsFilterInput, $limit: Int, $nextToken: String) {
    listShortUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`
export const syncShortUrls = /* GraphQL */ `
  query SyncShortUrls(
    $filter: ModelShortUrlsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShortUrls(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
      items {
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
      nextToken
      startedAt
    }
  }
`
