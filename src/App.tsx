import React from 'react';
import './App.css';

function App() {


    type Person = {
        id: number;
        firstName: string;
        lastName: string;
    }
    const pawel = {
        id: 0,
        firstName: 'Pawel',
        lastName: 'Developer'
    }
    const pawelUpdated = {
        id: 1,
        firstName: 'Pawel',
        lastName: 'Developer'
    }

    function updatePerson(id: number, mateusz: Partial<Person>) {

    }

    function anotherUpdate(oldData: Person, newData: Partial<Person>) {
        return {...oldData, ...newData}
    }


    const newNameOfPerson = {
        firstName: 'Cyprian',
    }

    updatePerson(0, newNameOfPerson)
    anotherUpdate(pawel, pawelUpdated)

    type Employee = {
        id: number;
        firstName: string;
        lastName: string;
        jobPosition?: string
    }

    function newWorker(newWorker: Required<Employee>) {
    }

    const newFrontend: Required<Employee> = {
        id: 98,
        firstName: 'Alex',
        lastName: 'Popek',
        jobPosition: "Front"
    }
    newWorker(newFrontend)

    const alek: Readonly<Employee> = {
        id: 23,
        firstName: 'Alexander',
        lastName: 'Domek',
        jobPosition: 'Backend',
    }
    // alek.firstName = 'Wikary'


    type NamesKey = 'Pawel' | 'Ania' | 'Cyprian'

    type MyFamilyType = Record<NamesKey, Partial<Person>>;


    const myFamily: MyFamilyType = {
        Pawel: {id: 9, firstName: 'Pawel', lastName: 'Developer'},
        Ania: {id: 4, firstName: 'Ania', lastName: 'Developer'},
        Cyprian: {id: 2, firstName: 'Cyprian', lastName: 'Developer'}
    }

    return (
        <div className="App">
            <p>asda</p>
        </div>
    );
}

export default App;
