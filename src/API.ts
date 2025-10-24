/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoryInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelStoryConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
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

export type Story = {
  __typename: "Story",
  id: string,
  title: string,
  content?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateStoryInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type CreateChapterInput = {
  id?: string | null,
  storyID: string,
  title: string,
  text?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelChapterConditionInput = {
  storyID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChapterConditionInput | null > | null,
  or?: Array< ModelChapterConditionInput | null > | null,
  not?: ModelChapterConditionInput | null,
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

export type Chapter = {
  __typename: "Chapter",
  id: string,
  storyID: string,
  title: string,
  text?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateChapterInput = {
  id: string,
  storyID?: string | null,
  title?: string | null,
  text?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChapterInput = {
  id: string,
};

export type CreateMomentInput = {
  id?: string | null,
  chapterID: string,
  title?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMomentConditionInput = {
  chapterID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMomentConditionInput | null > | null,
  or?: Array< ModelMomentConditionInput | null > | null,
  not?: ModelMomentConditionInput | null,
};

export type Moment = {
  __typename: "Moment",
  id: string,
  chapterID: string,
  title?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateMomentInput = {
  id: string,
  chapterID?: string | null,
  title?: string | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMomentInput = {
  id: string,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type ModelChapterFilterInput = {
  id?: ModelIDInput | null,
  storyID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChapterFilterInput | null > | null,
  or?: Array< ModelChapterFilterInput | null > | null,
  not?: ModelChapterFilterInput | null,
};

export type ModelChapterConnection = {
  __typename: "ModelChapterConnection",
  items:  Array<Chapter | null >,
  nextToken?: string | null,
};

export type ModelMomentFilterInput = {
  id?: ModelIDInput | null,
  chapterID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMomentFilterInput | null > | null,
  or?: Array< ModelMomentFilterInput | null > | null,
  not?: ModelMomentFilterInput | null,
};

export type ModelMomentConnection = {
  __typename: "ModelMomentConnection",
  items:  Array<Moment | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoryFilterInput | null > | null,
  owner?: ModelStringInput | null,
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

export type ModelSubscriptionChapterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storyID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  or?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionMomentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  chapterID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMomentFilterInput | null > | null,
  or?: Array< ModelSubscriptionMomentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateChapterMutationVariables = {
  input: CreateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type CreateChapterMutation = {
  createChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateChapterMutationVariables = {
  input: UpdateChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type UpdateChapterMutation = {
  updateChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteChapterMutationVariables = {
  input: DeleteChapterInput,
  condition?: ModelChapterConditionInput | null,
};

export type DeleteChapterMutation = {
  deleteChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateMomentMutationVariables = {
  input: CreateMomentInput,
  condition?: ModelMomentConditionInput | null,
};

export type CreateMomentMutation = {
  createMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateMomentMutationVariables = {
  input: UpdateMomentInput,
  condition?: ModelMomentConditionInput | null,
};

export type UpdateMomentMutation = {
  updateMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteMomentMutationVariables = {
  input: DeleteMomentInput,
  condition?: ModelMomentConditionInput | null,
};

export type DeleteMomentMutation = {
  deleteMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListStoriesQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoriesQuery = {
  listStories?:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      title: string,
      content?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChapterQueryVariables = {
  id: string,
};

export type GetChapterQuery = {
  getChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListChaptersQueryVariables = {
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChaptersQuery = {
  listChapters?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      id: string,
      storyID: string,
      title: string,
      text?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMomentQueryVariables = {
  id: string,
};

export type GetMomentQuery = {
  getMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListMomentsQueryVariables = {
  filter?: ModelMomentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMomentsQuery = {
  listMoments?:  {
    __typename: "ModelMomentConnection",
    items:  Array< {
      __typename: "Moment",
      id: string,
      chapterID: string,
      title?: string | null,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    content?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnCreateChapterSubscription = {
  onCreateChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnUpdateChapterSubscription = {
  onUpdateChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
};

export type OnDeleteChapterSubscription = {
  onDeleteChapter?:  {
    __typename: "Chapter",
    id: string,
    storyID: string,
    title: string,
    text?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
};

export type OnCreateMomentSubscription = {
  onCreateMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
};

export type OnUpdateMomentSubscription = {
  onUpdateMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
};

export type OnDeleteMomentSubscription = {
  onDeleteMoment?:  {
    __typename: "Moment",
    id: string,
    chapterID: string,
    title?: string | null,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
