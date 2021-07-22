import React from 'react';
import './App.css';

function App() {

    // class Point {
    //    private x=4;
    // }
    // class PointXY {
    //     public x = 5;
    // }
    // const point = new PointXY()

    class Person {
        // public age: number;
        // private firstName: string;
        // private lastName: string
        #pesel = 5
        public _age: number

        constructor(age: number, private firstName: string, protected lastName: string) {
            // this.age = age
            // readonly this.firstName = firstName
            // this.lastName = lastName
            this._age = age
        }

        get age() {
            return this._age
        }

        set age(newAge: number) {
            if (newAge < 0) {
                this._age = 0
            }
        }

        public changeFirstname(newName: string) {
            this.firstName = newName
        }

        greetings() {
            console.log(`hello ${this.firstName} ${this.lastName}`)
            this.showPesel()
        }

        private showPesel() {
            console.log(this.#pesel)
        }
    }

    class Employee extends Person {
        constructor(age: number, firstName: string, lastName: string) {
            super(age, firstName, lastName)
        }

        // showFirstName(){
        //     console.log(this.firstName)
        //
        // }
        // showFirstName(){
        //     console.log(this.lastName)
        //
        // }

    }

    const user = new Person(31, 'Mati', 'Domek')
    const employee = new Employee(31, 'Mat', 'Domek')


    // user.age = 30
    // user.firstName = 'ada'
    // user.changeFirstname('ada')
    // user.#pesel

    // user.firstName = 'Alex'


    // klasy abstrakcyjne

    abstract class Human {
        public abstract age: number
        public abstract firstName: string
        public abstract lastName: string

        private abstract greetings(): void;

        public abstract getAge(): number;
    }

    class Person11 extends Human {
        constructor(public age: number, protected firstName: string, public lastName: string) {
            super();
        }

        public greetings() {
            console.log()
        }

        getAge() {
            return this.age
        }
    }

    const human = new Human()


    //

    return (
        <div className="App">
            <p>asda</p>
        </div>
    );
}

export default App;
