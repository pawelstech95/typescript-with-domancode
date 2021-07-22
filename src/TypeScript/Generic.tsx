import {type} from 'os';
import React from 'react';
import './App.css';

function App() {

    const names: Array<string> = [];
    names.push('Paweł')

    const mapObject = new Map<string, number>()
    const setObject = new Set<number>()

    // setObject.add(1)

    function getAndReturnValue<T>(item: T) {
        return item
    }

    const nameWiktor = 'Wiktor'

    const returnedNameWiktor = getAndReturnValue(nameWiktor)


    type FrontendFramework = 'React' | 'Vue' | 'Angular'
    type  BackendFramework = '.Net' | 'Laravel' | 'Nest.js'

    type Employee = {
        firstName: string;
        lastName: string;
        age: number;
        pesel: number;

    }

    type FrontendDev = {
        frontendFramework: FrontendFramework
    } & Employee

    type BackendDev = {
        backendFramework: BackendFramework
    } & Employee

    interface Collection<T> {
        devs: Array<T>;

        addDev(newDev: T): void

        getDev(pesel: number): T | null

        removeDev(pesel: number): void

        uupdate(pesel: number, newData: FrontendDev): void

    }

    // interface FrontendDevsCollection {
    //     devs: Array<FrontendDev>;
    //
    //     addDev(newDev: FrontendDev): void
    //
    //     getDev(pesel: number): FrontendDev | null;
    //
    //     removeDev(pesel: number): void;
    //
    //     update(pesel: number, newData: FrontendDev): void
    //
    // }
    //
    // interface BackendDevsCollection {
    //     devs: Array<FrontendDev>;
    //
    //     addDev(newDev: BackendDev): void
    //
    //     getDev(pesel: number): BackendDev | null;
    //
    //     removeDev(pesel: number): void;
    //
    //     update(pesel: number, newData: BackendDev): void
    //
    // }

    class EmployeeDatabase<T extends FrontendDev | BackendDev> implements Collection<T> {
        devs: Array<T> = []

        addDev(newDev: T) {
            this.devs.push(newDev);

        }

        getDev(pesel: number) {
            return this.devs.find(dev => dev.pesel === pesel) ?? null
        }

        removeDev(pesel: number) {
            this.devs = this.devs.filter(dev => dev.pesel !== pesel)
        }

        update(pesel: number, newData: T) {
            this.devs = this.devs.map(dev => {
                if (dev.pesel === pesel) {
                    return {...dev, ...newData}
                }
                return dev;
            })
        }
    }

    // class FrontendDevsDatabase implements FrontendDevsCollection {
    //     devs: Array<FrontendDev> = []
    //
    //     addDev(newDev: FrontendDev) {
    //         this.devs.push(newDev);
    //
    //     }
    //
    //     getDev(pesel: number) {
    //         return this.devs.find(dev => dev.pesel === pesel) ?? null
    //     }
    //
    //     removeDev(pesel: number) {
    //         this.devs = this.devs.filter(dev => dev.pesel !== pesel)
    //     }
    //
    //     update(pesel: number, newData: FrontendDev) {
    //         this.devs = this.devs.map(dev => {
    //             if (dev.pesel === pesel) {
    //                 return {...dev, ...newData}
    //             }
    //             return dev;
    //         })
    //     }
    //
    // }

    // class BackendDevsDatabase implements BackendDevsCollection {
    //     devs: Array<FrontendDev> = []
    //
    //     addDev(newDev: BackendDev) {
    //         this.devs.push(newDev);
    //
    //     }
    //
    //     getDev(pesel: number) {
    //         return this.devs.find(dev => dev.pesel === pesel) ?? null
    //     }
    //
    //     removeDev(pesel: number) {
    //         this.devs = this.devs.filter(dev => dev.pesel !== pesel)
    //     }
    //
    //     update(pesel: number, newData: BackendDev) {
    //         this.devs = this.devs.map(dev => {
    //             if (dev.pesel === pesel) {
    //                 return {...dev, ...newData}
    //             }
    //             return dev;
    //         })
    //     }
    //
    // }

    const frontendDevsDatabase = new EmployeeDatabase<FrontendDev>()
    frontendDevsDatabase.addDev({
        firstName: 'Paweł',
        lastName: 'developer',
        age: 31,
        pesel: 98267377377,
        frontendFramework: 'React'

    })


    const backendDevsDatabase = new EmployeeDatabase<BackendDev>()
    backendDevsDatabase.addDev({
        firstName: 'Paweł',
        lastName: 'developer',
        age: 31,
        pesel: 98267377377,
        backendFramework: 'Nest.js'

    })


    return (
        <div className="App">
            <p>asda</p>
        </div>
    );
}

export default App;
