/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResentment = /* GraphQL */ `
  query GetResentment($id: ID!) {
    getResentment(id: $id) {
      id
      commentator
      photo {
        region
        bucket
        key
      }
      text_content
      createdDate
      article_id
      article_owner_id
      ByPoemID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResentments = /* GraphQL */ `
  query ListResentments(
    $filter: ModelResentmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResentments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentator
        photo {
          region
          bucket
          key
        }
        text_content
        createdDate
        article_id
        article_owner_id
        ByPoemID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const resentmentsByPoemID = /* GraphQL */ `
  query ResentmentsByPoemID(
    $ByPoemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResentmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    resentmentsByPoemID(
      ByPoemID: $ByPoemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        commentator
        photo {
          region
          bucket
          key
        }
        text_content
        createdDate
        article_id
        article_owner_id
        ByPoemID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPoem = /* GraphQL */ `
  query GetPoem($id: ID!) {
    getPoem(id: $id) {
      id
      title
      text_content
      photo {
        region
        bucket
        key
      }
      category
      read_count
      createdDate
      owner
      ByOwnerID
      createdAt
      updatedAt
      author
    }
  }
`;
export const listPoems = /* GraphQL */ `
  query ListPoems(
    $filter: ModelPoemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        text_content
        photo {
          region
          bucket
          key
        }
        category
        read_count
        createdDate
        owner
        ByOwnerID
        createdAt
        updatedAt
        author
      }
      nextToken
    }
  }
`;
export const postsByOwner = /* GraphQL */ `
  query PostsByOwner(
    $ByOwnerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPoemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByOwner(
      ByOwnerID: $ByOwnerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        text_content
        photo {
          region
          bucket
          key
        }
        category
        read_count
        createdDate
        owner
        ByOwnerID
        createdAt
        updatedAt
        author
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      user_email
      owner
      user_description
      user_photo {
        region
        bucket
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_email
        owner
        user_description
        user_photo {
          region
          bucket
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
