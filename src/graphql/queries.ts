/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getStory = /* GraphQL */ `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    title
    description
    tags
    chapters {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStoryQueryVariables, APITypes.GetStoryQuery>;
export const listStories = /* GraphQL */ `query ListStories(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      tags
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoriesQueryVariables,
  APITypes.ListStoriesQuery
>;
export const getChapter = /* GraphQL */ `query GetChapter($id: ID!) {
  getChapter(id: $id) {
    id
    title
    storyID
    story {
      id
      title
      description
      tags
      createdAt
      updatedAt
      owner
      __typename
    }
    moments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChapterQueryVariables,
  APITypes.GetChapterQuery
>;
export const listChapters = /* GraphQL */ `query ListChapters(
  $filter: ModelChapterFilterInput
  $limit: Int
  $nextToken: String
) {
  listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      storyID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChaptersQueryVariables,
  APITypes.ListChaptersQuery
>;
export const getMoment = /* GraphQL */ `query GetMoment($id: ID!) {
  getMoment(id: $id) {
    id
    title
    notes
    chapterID
    chapter {
      id
      title
      storyID
      createdAt
      updatedAt
      owner
      __typename
    }
    mediaKey
    mediaType
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMomentQueryVariables, APITypes.GetMomentQuery>;
export const listMoments = /* GraphQL */ `query ListMoments(
  $filter: ModelMomentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      notes
      chapterID
      mediaKey
      mediaType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMomentsQueryVariables,
  APITypes.ListMomentsQuery
>;
export const chaptersByStoryID = /* GraphQL */ `query ChaptersByStoryID(
  $storyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChapterFilterInput
  $limit: Int
  $nextToken: String
) {
  chaptersByStoryID(
    storyID: $storyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      storyID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChaptersByStoryIDQueryVariables,
  APITypes.ChaptersByStoryIDQuery
>;
export const momentsByChapterID = /* GraphQL */ `query MomentsByChapterID(
  $chapterID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMomentFilterInput
  $limit: Int
  $nextToken: String
) {
  momentsByChapterID(
    chapterID: $chapterID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      notes
      chapterID
      mediaKey
      mediaType
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MomentsByChapterIDQueryVariables,
  APITypes.MomentsByChapterIDQuery
>;
