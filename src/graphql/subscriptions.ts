/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStory = /* GraphQL */ `subscription OnCreateStory($filter: ModelSubscriptionStoryFilterInput) {
  onCreateStory(filter: $filter) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStorySubscriptionVariables,
  APITypes.OnCreateStorySubscription
>;
export const onUpdateStory = /* GraphQL */ `subscription OnUpdateStory($filter: ModelSubscriptionStoryFilterInput) {
  onUpdateStory(filter: $filter) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStorySubscriptionVariables,
  APITypes.OnUpdateStorySubscription
>;
export const onDeleteStory = /* GraphQL */ `subscription OnDeleteStory($filter: ModelSubscriptionStoryFilterInput) {
  onDeleteStory(filter: $filter) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStorySubscriptionVariables,
  APITypes.OnDeleteStorySubscription
>;
export const onCreateChapter = /* GraphQL */ `subscription OnCreateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onCreateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSubscriptionVariables,
  APITypes.OnCreateChapterSubscription
>;
export const onUpdateChapter = /* GraphQL */ `subscription OnUpdateChapter($filter: ModelSubscriptionChapterFilterInput) {
  onUpdateChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSubscriptionVariables,
  APITypes.OnUpdateChapterSubscription
>;
export const onDeleteChapter = /* GraphQL */ `subscription OnDeleteChapter($filter: ModelSubscriptionChapterFilterInput) {
  onDeleteChapter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSubscriptionVariables,
  APITypes.OnDeleteChapterSubscription
>;
export const onCreateMoment = /* GraphQL */ `subscription OnCreateMoment($filter: ModelSubscriptionMomentFilterInput) {
  onCreateMoment(filter: $filter) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMomentSubscriptionVariables,
  APITypes.OnCreateMomentSubscription
>;
export const onUpdateMoment = /* GraphQL */ `subscription OnUpdateMoment($filter: ModelSubscriptionMomentFilterInput) {
  onUpdateMoment(filter: $filter) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMomentSubscriptionVariables,
  APITypes.OnUpdateMomentSubscription
>;
export const onDeleteMoment = /* GraphQL */ `subscription OnDeleteMoment($filter: ModelSubscriptionMomentFilterInput) {
  onDeleteMoment(filter: $filter) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMomentSubscriptionVariables,
  APITypes.OnDeleteMomentSubscription
>;
