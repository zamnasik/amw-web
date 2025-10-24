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
    content
    owner
    createdAt
    updatedAt
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
      content
      owner
      createdAt
      updatedAt
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
    storyID
    title
    text
    owner
    createdAt
    updatedAt
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
      storyID
      title
      text
      owner
      createdAt
      updatedAt
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
    chapterID
    title
    owner
    createdAt
    updatedAt
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
      chapterID
      title
      owner
      createdAt
      updatedAt
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
