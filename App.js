import React from "react";
import Counter from "./Counter";
// import "./App.css";

import MyHeader from "./MyHeader";

const number = 5;

function App() {
    return (
        <div className="App">
            <MyHeader />
            <Counter />
        </div>
    );
}

export default App;
