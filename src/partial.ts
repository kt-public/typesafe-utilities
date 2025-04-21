type DeepPartialImpl<T> =
  T extends Record<string, unknown>
    ? {
        [K in keyof T]?: DeepPartialImpl<T[K]>;
      }
    : T extends (infer U)[]
      ? DeepPartialImpl<U>[]
      : T;

export type DeepPartial<T extends Record<string, unknown>> = DeepPartialImpl<T>;
