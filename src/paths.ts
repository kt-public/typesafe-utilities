type ArraySuffix = `[${number | ''}]`;
type FieldSuffix<T> = T extends unknown[] ? `${ArraySuffix}` : '';

type PropertyPathsImplRecord<T extends Record<string, unknown>, Prefix> = {
	[K in keyof T]:
		| `${string & Prefix}${string & K}`
		| `${string & Prefix}${string & K}${FieldSuffix<T[K]>}`
		| PropertyPathsImpl<T[K], `${string & Prefix}${string & K}${FieldSuffix<T[K]>}.`>;
}[keyof T];

type PropertyPathsImpl<T, Prefix> =
	T extends Record<string, unknown>
		? PropertyPathsImplRecord<T, Prefix>
		: T extends (infer U)[]
			? PropertyPathsImpl<U, Prefix>
			: never;

export type PropertyPaths<T extends Record<string, unknown>> = PropertyPathsImpl<T, ''>;
