/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DeepPartial } from '../src/partial';

type TestType = {
	prop1: string;
	prop2: number;
	propArr: string[];
	propArr2: {
		propArr3: string[];
	};
	propArr4: {
		propArr5: string[];
	}[];
	prop3: {
		prop4: string;
		prop5: {
			prop6: string[];
		};
	}[];
};

type TestTypeDeepPartial = DeepPartial<TestType>;
const test1: TestTypeDeepPartial = {
	prop1: 'test',
	prop2: 123
};
const test2: TestTypeDeepPartial = {
	propArr: ['test1', 'test2'],
	propArr2: {}
};
const test3: TestTypeDeepPartial = {
	propArr2: {
		propArr3: ['test1', 'test2']
	}
};
const test4: TestTypeDeepPartial = {
	propArr4: [{}]
};
const test5: TestTypeDeepPartial = {
	propArr4: [
		{
			propArr5: ['test1', 'test2']
		}
	]
};
const test6: TestTypeDeepPartial = {
	prop3: [{}]
};
const test7: TestTypeDeepPartial = {
	prop3: [
		{
			prop4: 'test',
			prop5: {}
		}
	]
};
const test8: TestTypeDeepPartial = {
	prop3: [
		{
			prop4: 'test',
			prop5: {
				prop6: ['test1', 'test2']
			}
		}
	]
};
const test9: TestTypeDeepPartial = {
	prop3: [
		{
			prop4: 'test',
			prop5: {
				prop6: ['test1', 'test2']
			}
		},
		{}
	]
};
