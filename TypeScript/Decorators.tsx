import React from 'react';
import './App.css';

function App() {

    console.clear()

    // class decorators
    //
    // @Controller
    // class App {
    //     @Get()
    //     showHello() {
    //
    //     }
    // }

    // function assignId<T extends  {new(...args: any[]): {}}>(classToDecorate: T) {
    //     return class extends classToDecorate {
    //         id: number;
    //
    //         constructor(...args: any[]) {
    //             super(...args);
    //             this.id = Math.random()
    //         }
    //     }
    //
    // }
    // @assignId
    //
    // class Person {
    //     constructor(public firstName: string,public lastName : string) {
    //
    //
    //     }
    // }
    //
    // const person = new Person('Pawel', 'Domek')
    // console.log(person)


    // METHODS DECORATORS
    function minValue(value: number) {
        return function (
            target: Object,
            property: string,
            descriptor: PropertyDescriptor
        ) {
            console.log(descriptor.value)

            const orginalFunction = descriptor.value
            const newFunction = function (this: Object, ...args: any[]) {
                console.log('Przekazano takie arg' + args);
                if (args.some((coords) => coords < 0)) {
                    return console.log('błędne dane, wartość musi być większa od 0')
                }
                orginalFunction.apply(this, args)
            }
            descriptor.value = newFunction
            return descriptor
        }


        function protectMethod() {
            return function (
                t: Object,
                property: string,
                descriptor: PropertyDescriptor
            ) {
                console.log(`Metoda ${property} jest zabezpieczona przed nadpisaniem`)
                descriptor.writable = false
                return descriptor

            }

        }


        class Point {
            constructor(
                public x: number,
                public y: number,
            ) {
            }

        @tectMethod()
        @minValue(0);

            setPoint(x: number, y: number) {
                this.x = x;
                this.y = y;
            }

            showPoints() {
                console.log(`x: ${this.x}, y: ${this.y} `)
            }
        }

        const point = new Point(4, 6);
        point.setPoint = () => console.log('Nadpisałem funkcję')
        point.setPoint(1, 2);
        point.showPoints()

    }


    return (
        <div className="App">
            <p>asda</p>
        </div>
    );
}

export default App;
