/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DeepFilter,
  type FilterInclude,
  type FilterIncludeKeys,
  type NonNeverKeys,
  type OmitNever
} from '../src/filter';
import { type Equal, type Expect } from './helpers';

type TestType = {
  a: string;
  b: number;
  c: boolean;
};

type asserts_FilterKeys = [
  Expect<Equal<FilterIncludeKeys<TestType, string | number>, 'a' | 'b'>>,
  Expect<Equal<FilterIncludeKeys<TestType, string>, 'a'>>,
  Expect<Equal<FilterIncludeKeys<TestType, number>, 'b'>>,
  Expect<Equal<FilterIncludeKeys<TestType, boolean>, 'c'>>,
  Expect<Equal<FilterIncludeKeys<TestType, unknown>, 'a' | 'b' | 'c'>>
];

type asserts_Filter = [
  Expect<Equal<FilterInclude<TestType, string | number>, { a: string; b: number }>>,
  Expect<Equal<FilterInclude<TestType, string>, { a: string }>>,
  Expect<Equal<FilterInclude<TestType, number>, { b: number }>>,
  Expect<Equal<FilterInclude<TestType, boolean>, { c: boolean }>>,
  Expect<Equal<FilterInclude<TestType, unknown>, TestType>>
];

type TestTypeNever = {
  a: string;
  b: number;
  c: boolean;
  d: never;
};

type asserts_NeverKeys = [
  Expect<Equal<NonNeverKeys<TestType>, 'a' | 'b' | 'c'>>,
  Expect<Equal<NonNeverKeys<TestTypeNever>, 'a' | 'b' | 'c'>>
];

type asserts_OmitNever = [
  Expect<Equal<OmitNever<TestType>, TestType>>,
  Expect<Equal<OmitNever<TestTypeNever>, { a: string; b: number; c: boolean }>>
];

type TestTypeDeep = {
  a: string;
  b: number;
  c: boolean;
  d: {
    e: string;
    f: number;
    g: boolean;
  };
  h: {
    i: string;
    j: number;
    k: boolean;
  }[];
};

type asserts_DeepFilter = [
  Expect<
    Equal<DeepFilter<TestTypeDeep, string>, { a: string; d: { e: string }; h: { i: string }[] }>
  >,
  Expect<
    Equal<DeepFilter<TestTypeDeep, number>, { b: number; d: { f: number }; h: { j: number }[] }>
  >,
  Expect<
    Equal<DeepFilter<TestTypeDeep, boolean>, { c: boolean; d: { g: boolean }; h: { k: boolean }[] }>
  >,
  Expect<
    Equal<
      DeepFilter<TestTypeDeep, string | number>,
      { a: string; b: number; d: { e: string; f: number }; h: { i: string; j: number }[] }
    >
  >,
  Expect<Equal<DeepFilter<TestTypeDeep, unknown>, TestTypeDeep>>
];
