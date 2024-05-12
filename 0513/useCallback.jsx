import { useState, useCallback } from "react";

const App = () => {
    const [number, setNumber] = useState(0);

    const changeNumber = useCallback(() => {
        setNumber((number) => number + 1);
    }, []);

    return (
        <>
        <div className="App">
            <h1>{number}</h1>
            <button onClick={changeNumber}>+</button>
        </div>
        </>
    );
};

export default App;

