type PartialDeepImpl<T> =
	T extends Record<string, unknown>
		? {
				[K in keyof T]?: PartialDeepImpl<T[K]>;
			}
		: T extends (infer U)[]
			? PartialDeepImpl<U>[]
			: T;

export type PartialDeep<T extends Record<string, unknown>> = PartialDeepImpl<T>;
