/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoryInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  tags?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelStoryConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
  owner?: ModelStringInput | null,
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
  description?: string | null,
  tags?: Array< string | null > | null,
  chapters?: ModelChapterConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelChapterConnection = {
  __typename: "ModelChapterConnection",
  items:  Array<Chapter | null >,
  nextToken?: string | null,
};

export type Chapter = {
  __typename: "Chapter",
  id: string,
  title: string,
  storyID: string,
  story?: Story | null,
  moments?: ModelMomentConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelMomentConnection = {
  __typename: "ModelMomentConnection",
  items:  Array<Moment | null >,
  nextToken?: string | null,
};

export type Moment = {
  __typename: "Moment",
  id: string,
  title: string,
  notes?: string | null,
  chapterID: string,
  chapter?: Chapter | null,
  mediaKey?: string | null,
  mediaType?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateStoryInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteStoryInput = {
  id: string,
};

export type CreateChapterInput = {
  id?: string | null,
  title: string,
  storyID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelChapterConditionInput = {
  title?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChapterConditionInput | null > | null,
  or?: Array< ModelChapterConditionInput | null > | null,
  not?: ModelChapterConditionInput | null,
  owner?: ModelStringInput | null,
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

export type UpdateChapterInput = {
  id: string,
  title?: string | null,
  storyID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChapterInput = {
  id: string,
};

export type CreateMomentInput = {
  id?: string | null,
  title: string,
  notes?: string | null,
  chapterID: string,
  mediaKey?: string | null,
  mediaType?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMomentConditionInput = {
  title?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  chapterID?: ModelIDInput | null,
  mediaKey?: ModelStringInput | null,
  mediaType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMomentConditionInput | null > | null,
  or?: Array< ModelMomentConditionInput | null > | null,
  not?: ModelMomentConditionInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateMomentInput = {
  id: string,
  title?: string | null,
  notes?: string | null,
  chapterID?: string | null,
  mediaKey?: string | null,
  mediaType?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMomentInput = {
  id: string,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStoryConnection = {
  __typename: "ModelStoryConnection",
  items:  Array<Story | null >,
  nextToken?: string | null,
};

export type ModelChapterFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  storyID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChapterFilterInput | null > | null,
  or?: Array< ModelChapterFilterInput | null > | null,
  not?: ModelChapterFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelMomentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  chapterID?: ModelIDInput | null,
  mediaKey?: ModelStringInput | null,
  mediaType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMomentFilterInput | null > | null,
  or?: Array< ModelMomentFilterInput | null > | null,
  not?: ModelMomentFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
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
  title?: ModelSubscriptionStringInput | null,
  storyID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  or?: Array< ModelSubscriptionChapterFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionMomentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  chapterID?: ModelSubscriptionIDInput | null,
  mediaKey?: ModelSubscriptionStringInput | null,
  mediaType?: ModelSubscriptionStringInput | null,
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
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
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
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
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
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
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
      title: string,
      notes?: string | null,
      chapterID: string,
      mediaKey?: string | null,
      mediaType?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChaptersByStoryIDQueryVariables = {
  storyID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChapterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChaptersByStoryIDQuery = {
  chaptersByStoryID?:  {
    __typename: "ModelChapterConnection",
    items:  Array< {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MomentsByChapterIDQueryVariables = {
  chapterID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMomentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MomentsByChapterIDQuery = {
  momentsByChapterID?:  {
    __typename: "ModelMomentConnection",
    items:  Array< {
      __typename: "Moment",
      id: string,
      title: string,
      notes?: string | null,
      chapterID: string,
      mediaKey?: string | null,
      mediaType?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateStorySubscription = {
  onCreateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStorySubscription = {
  onUpdateStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  filter?: ModelSubscriptionStoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStorySubscription = {
  onDeleteStory?:  {
    __typename: "Story",
    id: string,
    title: string,
    description?: string | null,
    tags?: Array< string | null > | null,
    chapters?:  {
      __typename: "ModelChapterConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
  owner?: string | null,
};

export type OnCreateChapterSubscription = {
  onCreateChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
  owner?: string | null,
};

export type OnUpdateChapterSubscription = {
  onUpdateChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteChapterSubscriptionVariables = {
  filter?: ModelSubscriptionChapterFilterInput | null,
  owner?: string | null,
};

export type OnDeleteChapterSubscription = {
  onDeleteChapter?:  {
    __typename: "Chapter",
    id: string,
    title: string,
    storyID: string,
    story?:  {
      __typename: "Story",
      id: string,
      title: string,
      description?: string | null,
      tags?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    moments?:  {
      __typename: "ModelMomentConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
  owner?: string | null,
};

export type OnCreateMomentSubscription = {
  onCreateMoment?:  {
    __typename: "Moment",
    id: string,
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMomentSubscription = {
  onUpdateMoment?:  {
    __typename: "Moment",
    id: string,
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteMomentSubscriptionVariables = {
  filter?: ModelSubscriptionMomentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMomentSubscription = {
  onDeleteMoment?:  {
    __typename: "Moment",
    id: string,
    title: string,
    notes?: string | null,
    chapterID: string,
    chapter?:  {
      __typename: "Chapter",
      id: string,
      title: string,
      storyID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    mediaKey?: string | null,
    mediaType?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};
