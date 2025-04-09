/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropertyPaths } from '../src/generic';

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

const test1: PropertyPaths<TestType> = 'prop1';
const test2: PropertyPaths<TestType> = 'prop2';
const test3: PropertyPaths<TestType> = 'propArr';
const test4: PropertyPaths<TestType> = 'propArr[]';
const test5: PropertyPaths<TestType> = 'propArr[0]';
const test6: PropertyPaths<TestType> = 'propArr2.propArr3';
const test7: PropertyPaths<TestType> = 'propArr2.propArr3[]';
const test8: PropertyPaths<TestType> = 'propArr2.propArr3[0]';
const test9: PropertyPaths<TestType> = 'propArr4';
const test10: PropertyPaths<TestType> = 'propArr4[]';
const test11: PropertyPaths<TestType> = 'propArr4[0]';
const test12: PropertyPaths<TestType> = 'propArr4[].propArr5';
const test13: PropertyPaths<TestType> = 'propArr4[].propArr5[]';
const test14: PropertyPaths<TestType> = 'propArr4[].propArr5[0]';
const test15: PropertyPaths<TestType> = 'propArr4[0].propArr5';
const test16: PropertyPaths<TestType> = 'propArr4[0].propArr5[]';
const test17: PropertyPaths<TestType> = 'propArr4[0].propArr5[0]';
const test18: PropertyPaths<TestType> = 'prop3';
const test19: PropertyPaths<TestType> = 'prop3[]';
const test21: PropertyPaths<TestType> = 'prop3[].prop4';
const test22: PropertyPaths<TestType> = 'prop3[].prop5';
const test23: PropertyPaths<TestType> = 'prop3[].prop5.prop6';
const test24: PropertyPaths<TestType> = 'prop3[].prop5.prop6[]';
const test25: PropertyPaths<TestType> = 'prop3[0]';
const test26: PropertyPaths<TestType> = 'prop3[0].prop4';
const test27: PropertyPaths<TestType> = 'prop3[0].prop5';
const test28: PropertyPaths<TestType> = 'prop3[0].prop5.prop6';
const test29: PropertyPaths<TestType> = 'prop3[0].prop5.prop6[]';
const test30: PropertyPaths<TestType> = 'prop3[0].prop5.prop6[0]';
const test31: PropertyPaths<TestType> = 'prop3[0].prop5.prop6[0]';

// @ts-expect-error: Invalid property path
const test_e1: PropertyPaths<TestType> = ''; // should be error
// @ts-expect-error: Invalid property path
const test_e2: PropertyPaths<TestType> = 'prop1.prop2'; // should be error
// @ts-expect-error: Invalid property path
const test_e3: PropertyPaths<TestType> = 'prop1[]'; // should be error
// @ts-expect-error: Invalid property path
const test_e4: PropertyPaths<TestType> = 'prop1[0]'; // should be error
// @ts-expect-error: Invalid property path
const test_e5: PropertyPaths<TestType> = 'propArr.'; // should be error
