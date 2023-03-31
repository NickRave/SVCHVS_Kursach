import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import ListStudentComponent from './components/crud-students/ListStudentComponent';
import AddStudentComponent from "./components/crud-students/AddStudentComponent";

import AddComputerclassComponent from "./components/crud-computerclass/AddComputerclassComponent";
import ListCopmuterclassComponent from "./components/crud-computerclass/ListCopmuterclassComponent";

import ListCopmuterconfigurationComponent
    from "./components/crud-computerconfiguration/ListCopmuterconfigurationComponent";
import AddComputerconfigurationComponent
    from "./components/crud-computerconfiguration/AddComputerconfigurationComponent";

import ListDepartmentComponent from "./components/crud-department/ListDepartmentComponent";
import AddDepartmentComponent from "./components/crud-department/AddDepartmentComponent";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ListStudentComponent/>}></Route>
            <Route path="/add-student" element={<AddStudentComponent/>}></Route>
            <Route path="/edit-student/:id" element={<AddStudentComponent/>}></Route>
        </Routes>
        <Routes>
            <Route  path="/" element={<ListCopmuterclassComponent/>}></Route>
            <Route path="/add-computerclass" element={<AddComputerclassComponent/>}></Route>
            <Route path="/edit-computerclass/:id" element={<AddComputerclassComponent/>}></Route>
        </Routes>
        <Routes>
            <Route  path="/" element={<ListCopmuterconfigurationComponent/>}></Route>
            <Route path="/add-computerconfiguration" element={<AddComputerconfigurationComponent/>}></Route>
            <Route path="/edit-computerconfiguration/:id" element={<AddComputerconfigurationComponent/>}></Route>
        </Routes>
        <Routes>
            <Route  path="/" element={<ListDepartmentComponent/>}></Route>
            <Route path="/add-department" element={<AddDepartmentComponent/>}></Route>
            <Route path="/edit-department/:id" element={<AddDepartmentComponent/>}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;