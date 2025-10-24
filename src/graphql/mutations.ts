/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createStory = /* GraphQL */ `mutation CreateStory(
  $input: CreateStoryInput!
  $condition: ModelStoryConditionInput
) {
  createStory(input: $input, condition: $condition) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStoryMutationVariables,
  APITypes.CreateStoryMutation
>;
export const updateStory = /* GraphQL */ `mutation UpdateStory(
  $input: UpdateStoryInput!
  $condition: ModelStoryConditionInput
) {
  updateStory(input: $input, condition: $condition) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStoryMutationVariables,
  APITypes.UpdateStoryMutation
>;
export const deleteStory = /* GraphQL */ `mutation DeleteStory(
  $input: DeleteStoryInput!
  $condition: ModelStoryConditionInput
) {
  deleteStory(input: $input, condition: $condition) {
    id
    title
    content
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStoryMutationVariables,
  APITypes.DeleteStoryMutation
>;
export const createChapter = /* GraphQL */ `mutation CreateChapter(
  $input: CreateChapterInput!
  $condition: ModelChapterConditionInput
) {
  createChapter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChapterMutationVariables,
  APITypes.CreateChapterMutation
>;
export const updateChapter = /* GraphQL */ `mutation UpdateChapter(
  $input: UpdateChapterInput!
  $condition: ModelChapterConditionInput
) {
  updateChapter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChapterMutationVariables,
  APITypes.UpdateChapterMutation
>;
export const deleteChapter = /* GraphQL */ `mutation DeleteChapter(
  $input: DeleteChapterInput!
  $condition: ModelChapterConditionInput
) {
  deleteChapter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChapterMutationVariables,
  APITypes.DeleteChapterMutation
>;
export const createMoment = /* GraphQL */ `mutation CreateMoment(
  $input: CreateMomentInput!
  $condition: ModelMomentConditionInput
) {
  createMoment(input: $input, condition: $condition) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMomentMutationVariables,
  APITypes.CreateMomentMutation
>;
export const updateMoment = /* GraphQL */ `mutation UpdateMoment(
  $input: UpdateMomentInput!
  $condition: ModelMomentConditionInput
) {
  updateMoment(input: $input, condition: $condition) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMomentMutationVariables,
  APITypes.UpdateMomentMutation
>;
export const deleteMoment = /* GraphQL */ `mutation DeleteMoment(
  $input: DeleteMomentInput!
  $condition: ModelMomentConditionInput
) {
  deleteMoment(input: $input, condition: $condition) {
    id
    chapterID
    title
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMomentMutationVariables,
  APITypes.DeleteMomentMutation
>;
