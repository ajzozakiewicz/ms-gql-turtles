import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EditMonkeyInput = {
  id: Scalars['ID'];
  species?: InputMaybe<MonkeySpecies>;
};

export type EditTurtleInput = {
  id: Scalars['ID'];
  species?: InputMaybe<Species>;
};

export type Monkey = {
  __typename?: 'Monkey';
  id: Scalars['ID'];
  species: MonkeySpecies;
};

export type MonkeyMutationResponse = {
  __typename?: 'MonkeyMutationResponse';
  message?: Maybe<Scalars['String']>;
  statusCode: Scalars['Int'];
};

export enum MonkeySpecies {
  Chimpanzee = 'CHIMPANZEE',
  Gorilla = 'GORILLA',
  Spider = 'SPIDER'
}

export type Mutation = {
  __typename?: 'Mutation';
  createMonkey?: Maybe<MonkeyMutationResponse>;
  createTurtle?: Maybe<TurtleMutationResponse>;
  editMonkey?: Maybe<MonkeyMutationResponse>;
  editTurtle?: Maybe<TurtleMutationResponse>;
};


export type MutationCreateMonkeyArgs = {
  species: MonkeySpecies;
};


export type MutationCreateTurtleArgs = {
  species: Species;
};


export type MutationEditMonkeyArgs = {
  monkey: EditMonkeyInput;
};


export type MutationEditTurtleArgs = {
  turtle: EditTurtleInput;
};

export type Query = {
  __typename?: 'Query';
  monkeys?: Maybe<Array<Maybe<Monkey>>>;
  turtles?: Maybe<Array<Maybe<Turtle>>>;
};

export enum Species {
  Box = 'BOX',
  Loggerhead = 'LOGGERHEAD',
  Painted = 'PAINTED',
  Sea = 'SEA',
  Snapping = 'SNAPPING'
}

export type Turtle = {
  __typename?: 'Turtle';
  id: Scalars['ID'];
  species: Species;
};

export type TurtleMutationResponse = {
  __typename?: 'TurtleMutationResponse';
  message?: Maybe<Scalars['String']>;
  statusCode: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EditMonkeyInput: EditMonkeyInput;
  EditTurtleInput: EditTurtleInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Monkey: ResolverTypeWrapper<Monkey>;
  MonkeyMutationResponse: ResolverTypeWrapper<MonkeyMutationResponse>;
  MonkeySpecies: MonkeySpecies;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Species: Species;
  String: ResolverTypeWrapper<Scalars['String']>;
  Turtle: ResolverTypeWrapper<Turtle>;
  TurtleMutationResponse: ResolverTypeWrapper<TurtleMutationResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  EditMonkeyInput: EditMonkeyInput;
  EditTurtleInput: EditTurtleInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Monkey: Monkey;
  MonkeyMutationResponse: MonkeyMutationResponse;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Turtle: Turtle;
  TurtleMutationResponse: TurtleMutationResponse;
};

export type MonkeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monkey'] = ResolversParentTypes['Monkey']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['MonkeySpecies'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonkeyMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonkeyMutationResponse'] = ResolversParentTypes['MonkeyMutationResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMonkey?: Resolver<Maybe<ResolversTypes['MonkeyMutationResponse']>, ParentType, ContextType, RequireFields<MutationCreateMonkeyArgs, 'species'>>;
  createTurtle?: Resolver<Maybe<ResolversTypes['TurtleMutationResponse']>, ParentType, ContextType, RequireFields<MutationCreateTurtleArgs, 'species'>>;
  editMonkey?: Resolver<Maybe<ResolversTypes['MonkeyMutationResponse']>, ParentType, ContextType, RequireFields<MutationEditMonkeyArgs, 'monkey'>>;
  editTurtle?: Resolver<Maybe<ResolversTypes['TurtleMutationResponse']>, ParentType, ContextType, RequireFields<MutationEditTurtleArgs, 'turtle'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  monkeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['Monkey']>>>, ParentType, ContextType>;
  turtles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Turtle']>>>, ParentType, ContextType>;
};

export type TurtleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Turtle'] = ResolversParentTypes['Turtle']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['Species'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TurtleMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TurtleMutationResponse'] = ResolversParentTypes['TurtleMutationResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Monkey?: MonkeyResolvers<ContextType>;
  MonkeyMutationResponse?: MonkeyMutationResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Turtle?: TurtleResolvers<ContextType>;
  TurtleMutationResponse?: TurtleMutationResponseResolvers<ContextType>;
};

