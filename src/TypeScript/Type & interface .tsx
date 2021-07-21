import { type } from 'os';
import React from 'react';
import './App.css';

function App() {
  type UserTypes = 'Admin' | 'User';
  type ComponentsTypes = 'Public' | 'Private';

  let myUserType: UserTypes = 'Admin';
  let myComponentType: ComponentsTypes = 'Public';

  // myUserType = 'User';

  type PointXPossition = 1 | 2 | 3 | 4 | 5;

  type BiggerType = {
    commonProperty: string;
    additionalProperty: string;
  };

  type SmallerType = {
    commonProperty: string;
    anotherOneProperty: number;
  };

  function showProperty(someObject: SmallerType) {
    return someObject.commonProperty;
  }

  const exampleObject = {
    a: '1',
    b: 0,
  } as const;

//   exampleObject.a = '5';

  //   const bigger : BiggerType = {
  //       commonProperty:'test',
  //       additionalProperty: 'test'
  //   }
  //   showProperty({commonProperty: 'x'})

  type SomeFunction = (someObject: SmallerType) => string;

  let func: SomeFunction = showProperty;

  function showCommonProperty(
    objectWithCommonProperty: BiggerType | SmallerType
  ) {
    return objectWithCommonProperty.commonProperty;
  }

  const objectTest: BiggerType & SmallerType = {
    commonProperty: 'x',
    additionalProperty: 'c',
    anotherOneProperty: 1,
  };

  type NewType = {
    bigger: BiggerType;
    smaller: SmallerType;
    point: Point;
  };

  //   type NewType = {
  //    // nie mozna duplikowac
  //   }
  function x(y: NewType) {
    y.bigger.additionalProperty;
  }

  // interface

  interface Point {
    readonly x: PointXPossition;
    readonly y: number;
    log: () => void
  }
  interface Description {
    description: string;
  }
  interface PointWithDescription extends Point, Description {
    z?: number;
  }

  const point: PointWithDescription = {
    x: 2,
    y: 0,
    description: 'Opis',
  };


  point.description = 'rtr'
//   point.x = z //readonly


class ExampleClass implements Point {
 
}

  return (
    <div className="App">
      <p>asda</p>
    </div>
  );
}

export default App;
