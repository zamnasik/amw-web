/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateStory = /* GraphQL */ `subscription OnCreateStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onCreateStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStorySubscriptionVariables,
  APITypes.OnCreateStorySubscription
>;
export const onUpdateStory = /* GraphQL */ `subscription OnUpdateStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onUpdateStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStorySubscriptionVariables,
  APITypes.OnUpdateStorySubscription
>;
export const onDeleteStory = /* GraphQL */ `subscription OnDeleteStory(
  $filter: ModelSubscriptionStoryFilterInput
  $owner: String
) {
  onDeleteStory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStorySubscriptionVariables,
  APITypes.OnDeleteStorySubscription
>;
export const onCreateChapter = /* GraphQL */ `subscription OnCreateChapter(
  $filter: ModelSubscriptionChapterFilterInput
  $owner: String
) {
  onCreateChapter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChapterSubscriptionVariables,
  APITypes.OnCreateChapterSubscription
>;
export const onUpdateChapter = /* GraphQL */ `subscription OnUpdateChapter(
  $filter: ModelSubscriptionChapterFilterInput
  $owner: String
) {
  onUpdateChapter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChapterSubscriptionVariables,
  APITypes.OnUpdateChapterSubscription
>;
export const onDeleteChapter = /* GraphQL */ `subscription OnDeleteChapter(
  $filter: ModelSubscriptionChapterFilterInput
  $owner: String
) {
  onDeleteChapter(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChapterSubscriptionVariables,
  APITypes.OnDeleteChapterSubscription
>;
export const onCreateMoment = /* GraphQL */ `subscription OnCreateMoment(
  $filter: ModelSubscriptionMomentFilterInput
  $owner: String
) {
  onCreateMoment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMomentSubscriptionVariables,
  APITypes.OnCreateMomentSubscription
>;
export const onUpdateMoment = /* GraphQL */ `subscription OnUpdateMoment(
  $filter: ModelSubscriptionMomentFilterInput
  $owner: String
) {
  onUpdateMoment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMomentSubscriptionVariables,
  APITypes.OnUpdateMomentSubscription
>;
export const onDeleteMoment = /* GraphQL */ `subscription OnDeleteMoment(
  $filter: ModelSubscriptionMomentFilterInput
  $owner: String
) {
  onDeleteMoment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMomentSubscriptionVariables,
  APITypes.OnDeleteMomentSubscription
>;
