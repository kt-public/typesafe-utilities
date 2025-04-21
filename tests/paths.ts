/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropertyPaths } from '../src/paths';

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

type TestTypePropertyPaths = PropertyPaths<TestType>;

const test1: TestTypePropertyPaths = 'prop1';
const test2: TestTypePropertyPaths = 'prop2';
const test3: TestTypePropertyPaths = 'propArr';
const test4: TestTypePropertyPaths = 'propArr[]';
const test5: TestTypePropertyPaths = 'propArr[0]';
const test6: TestTypePropertyPaths = 'propArr2.propArr3';
const test7: TestTypePropertyPaths = 'propArr2.propArr3[]';
const test8: TestTypePropertyPaths = 'propArr2.propArr3[0]';
const test9: TestTypePropertyPaths = 'propArr4';
const test10: TestTypePropertyPaths = 'propArr4[]';
const test11: TestTypePropertyPaths = 'propArr4[0]';
const test12: TestTypePropertyPaths = 'propArr4[].propArr5';
const test13: TestTypePropertyPaths = 'propArr4[].propArr5[]';
const test14: TestTypePropertyPaths = 'propArr4[].propArr5[0]';
const test15: TestTypePropertyPaths = 'propArr4[0].propArr5';
const test16: TestTypePropertyPaths = 'propArr4[0].propArr5[]';
const test17: TestTypePropertyPaths = 'propArr4[0].propArr5[0]';
const test18: TestTypePropertyPaths = 'prop3';
const test19: TestTypePropertyPaths = 'prop3[]';
const test21: TestTypePropertyPaths = 'prop3[].prop4';
const test22: TestTypePropertyPaths = 'prop3[].prop5';
const test23: TestTypePropertyPaths = 'prop3[].prop5.prop6';
const test24: TestTypePropertyPaths = 'prop3[].prop5.prop6[]';
const test25: TestTypePropertyPaths = 'prop3[0]';
const test26: TestTypePropertyPaths = 'prop3[0].prop4';
const test27: TestTypePropertyPaths = 'prop3[0].prop5';
const test28: TestTypePropertyPaths = 'prop3[0].prop5.prop6';
const test29: TestTypePropertyPaths = 'prop3[0].prop5.prop6[]';
const test30: TestTypePropertyPaths = 'prop3[0].prop5.prop6[0]';

// @ts-expect-error: Invalid property path
const test_e1: TestTypePropertyPaths = ''; // should be error
// @ts-expect-error: Invalid property path
const test_e2: TestTypePropertyPaths = 'prop1.prop2'; // should be error
// @ts-expect-error: Invalid property path
const test_e3: TestTypePropertyPaths = 'prop1[]'; // should be error
// @ts-expect-error: Invalid property path
const test_e4: TestTypePropertyPaths = 'prop1[0]'; // should be error
// @ts-expect-error: Invalid property path
const test_e5: TestTypePropertyPaths = 'propArr.'; // should be error
