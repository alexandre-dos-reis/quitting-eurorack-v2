import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  module: Array<Module>;
  module_aggregated: Array<Module_Aggregated>;
  module_by_id?: Maybe<Module>;
  module_files: Array<Module_Files>;
  module_files_aggregated: Array<Module_Files_Aggregated>;
  module_files_by_id?: Maybe<Module_Files>;
};


export type QueryModuleArgs = {
  filter?: InputMaybe<Module_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryModule_AggregatedArgs = {
  filter?: InputMaybe<Module_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryModule_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryModule_FilesArgs = {
  filter?: InputMaybe<Module_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryModule_Files_AggregatedArgs = {
  filter?: InputMaybe<Module_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryModule_Files_By_IdArgs = {
  id: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
  __typename?: 'directus_files';
  id: Scalars['ID'];
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
};

export type Module = {
  __typename?: 'module';
  box_included?: Maybe<Scalars['Boolean']>;
  condition?: Maybe<Scalars['String']>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  first_owner?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<Directus_Files>;
  is_sold?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  modulargrid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  on_sale?: Maybe<Scalars['Boolean']>;
  pictures?: Maybe<Array<Maybe<Module_Files>>>;
  pictures_func?: Maybe<Count_Functions>;
  price?: Maybe<Scalars['Int']>;
  rack_rash?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};


export type ModuleImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ModulePicturesArgs = {
  filter?: InputMaybe<Module_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Module_Aggregated = {
  __typename?: 'module_aggregated';
  avg?: Maybe<Module_Aggregated_Fields>;
  avgDistinct?: Maybe<Module_Aggregated_Fields>;
  count?: Maybe<Module_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Module_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Module_Aggregated_Fields>;
  min?: Maybe<Module_Aggregated_Fields>;
  sum?: Maybe<Module_Aggregated_Fields>;
  sumDistinct?: Maybe<Module_Aggregated_Fields>;
};

export type Module_Aggregated_Count = {
  __typename?: 'module_aggregated_count';
  box_included?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  first_owner?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  is_sold?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['Int']>;
  modulargrid?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  on_sale?: Maybe<Scalars['Int']>;
  pictures?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  rack_rash?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type Module_Aggregated_Fields = {
  __typename?: 'module_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Module_Files = {
  __typename?: 'module_files';
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID'];
  module_id?: Maybe<Module>;
};


export type Module_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Module_FilesModule_IdArgs = {
  filter?: InputMaybe<Module_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Module_Files_Aggregated = {
  __typename?: 'module_files_aggregated';
  avg?: Maybe<Module_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Module_Files_Aggregated_Fields>;
  count?: Maybe<Module_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Module_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Module_Files_Aggregated_Fields>;
  min?: Maybe<Module_Files_Aggregated_Fields>;
  sum?: Maybe<Module_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Module_Files_Aggregated_Fields>;
};

export type Module_Files_Aggregated_Count = {
  __typename?: 'module_files_aggregated_count';
  directus_files_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  module_id?: Maybe<Scalars['Int']>;
};

export type Module_Files_Aggregated_Fields = {
  __typename?: 'module_files_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  module_id?: Maybe<Scalars['Float']>;
};

export type Module_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Module_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Module_Files_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  module_id?: InputMaybe<Module_Filter>;
};

export type Module_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Module_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Module_Filter>>>;
  box_included?: InputMaybe<Boolean_Filter_Operators>;
  condition?: InputMaybe<String_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  first_owner?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  is_sold?: InputMaybe<Boolean_Filter_Operators>;
  manufacturer?: InputMaybe<String_Filter_Operators>;
  modulargrid?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  on_sale?: InputMaybe<Boolean_Filter_Operators>;
  pictures?: InputMaybe<Module_Files_Filter>;
  pictures_func?: InputMaybe<Count_Function_Filter_Operators>;
  price?: InputMaybe<Number_Filter_Operators>;
  rack_rash?: InputMaybe<Boolean_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _icontains?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type GetModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModulesQuery = { __typename?: 'Query', module: Array<{ __typename?: 'module', id: string, manufacturer?: string | null, name?: string | null, condition?: string | null, box_included?: boolean | null, modulargrid?: string | null, price?: number | null, rack_rash?: boolean | null, pictures?: Array<{ __typename?: 'module_files', directus_files_id?: { __typename?: 'directus_files', id: string } | null } | null> | null }> };


export const GetModulesDocument = gql`
    query getModules {
  module {
    id
    manufacturer
    name
    condition
    box_included
    modulargrid
    price
    rack_rash
    pictures {
      directus_files_id {
        id
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getModules(variables?: GetModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModulesQuery>(GetModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModules', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;