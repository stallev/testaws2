/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResentment = /* GraphQL */ `
  subscription OnCreateResentment($owner: String) {
    onCreateResentment(owner: $owner) {
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
export const onUpdateResentment = /* GraphQL */ `
  subscription OnUpdateResentment($owner: String) {
    onUpdateResentment(owner: $owner) {
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
export const onDeleteResentment = /* GraphQL */ `
  subscription OnDeleteResentment($owner: String) {
    onDeleteResentment(owner: $owner) {
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
export const onCreatePoem = /* GraphQL */ `
  subscription OnCreatePoem($author: String) {
    onCreatePoem(author: $author) {
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
export const onUpdatePoem = /* GraphQL */ `
  subscription OnUpdatePoem($author: String) {
    onUpdatePoem(author: $author) {
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
export const onDeletePoem = /* GraphQL */ `
  subscription OnDeletePoem($author: String) {
    onDeletePoem(author: $author) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($owner: String) {
    onCreateAuthor(owner: $owner) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($owner: String) {
    onUpdateAuthor(owner: $owner) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($owner: String) {
    onDeleteAuthor(owner: $owner) {
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
