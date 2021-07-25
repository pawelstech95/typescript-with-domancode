import React from 'react';
import './App.css';

function App() {

    // const user = {} as { age: string, names?: { firstName: string, lastName: string } }
    //
    // user.age = '31'
    // // user.names = {} as { firstName: string, lastName: string }
    // user.names.firstName = 'Paweł'
    // user.names.lastName = 'Developer'
    //
    // function showUserInfo(user: { age: number | string, names?: { firstName: string, lastName: string } }) {
    //     const {age, names: {firstName, lastName} = {firstName: 'Unknown', lastName: 'User'}} = user;
    //     return `${firstName} ${lastName} has ${age}`
    // }
    //
    // console.log(showUserInfo(user))

    // {
    //     const {age, names: {firstName, lastName} = {firstName: 'Unknown', lastName: 'User'}} = user;
    //     return `${firstName} ${lastName} has ${age}`
    // }


    // ---------------->    Interface

    interface Names {
        firstName: string,
        lastName: string
    }

    interface User {
        age: number;
        names: Names
    }

    // interface Player {
    //     nick: string;
    //     names?: Names
    // }
    type Player = {
        nick: string,
        names: {
            firstName: string,
            lastName: string,
        }
    }
    const user: User = {
        age: 25,
        names: {
            firstName: 'Paweł',
            lastName: 'Developer'
        }
    }
    const player: Player = {
        nick: 'Cypi',
        names: {
            firstName: 'Cyprian',
            lastName: 'Homek'
        }
    }

    const peopleList: (User | Player)[] = [];
    // const firstNameOfSomeone = peopleList[5].names.firstName; // nie

    peopleList.push(player)
    peopleList.push(user)
    peopleList.forEach(person => {
        if ('age' in person) {

            console.log(showUserInfo(person))
        } else {
            console.log(showUserInfo({...person, age: 0}))
        }
    })

    function showUserInfo(user: User) {
        const {age, names: {firstName, lastName} = {firstName: 'Unknown', lastName: 'User'}} = user;
        return `${firstName} ${lastName} has ${age}`
    }

    function showFirstNameLastName(person: { names: { firstName: string, lastName: string } }
    ) {
        const {firstName, lastName} = person.names
        return `${firstName} ${lastName}`
    }


    console.log(showUserInfo(user))
    console.log(showFirstNameLastName(user))
    console.log(showFirstNameLastName(player))
    return (
        <div className="App">

        </div>
    );
}

export default App;
