import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged

// Example 2: distinctUntilChanged with objects

const obj_1 = { name: 'Test' };
const obj_2 = { name: 'Rest' };
const obj_3 = { name: 'Test' };
const obj_4 = { name: 'Rest' };
const obj_5 = { name: 'Test' };
const obj_6 = { name: 'Test' };

const arrObj = [obj_1, obj_2, obj_3, obj_4, obj_5, obj_6];

//Objects must be same reference
const source$ = from(arrObj);

// only emit distinct objects, based on last emitted value
source$.pipe(distinctUntilChanged()).subscribe(console.log);
