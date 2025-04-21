export type FilterIncludeKeys<T, IncludeType> = {
  [K in keyof T]: T[K] extends IncludeType ? K : never;
}[keyof T];

export type FilterInclude<T, IncludeType> = {
  [K in FilterIncludeKeys<T, IncludeType>]: T[K];
};

export type NonNeverKeys<T> = {
  [K in keyof T]-?: [T[K]] extends [never] ? never : K;
}[keyof T];

export type OmitNever<T> = {
  [K in Extract<keyof T, NonNeverKeys<T>>]: T[K];
};

export type DeepFilter<T, IncludeType> = OmitNever<{
  [K in keyof T]: T[K] extends IncludeType
    ? T[K]
    : T[K] extends Record<string, unknown>
      ? DeepFilter<T[K], IncludeType>
      : T[K] extends (infer U)[]
        ? DeepFilter<U, IncludeType>[]
        : never;
}>;
