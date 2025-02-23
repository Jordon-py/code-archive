import { useState } from "react";

export default function Button() {
    const [state, setState] = useState(false);

    function handleClick() {
        setState((prev) => !prev);
    }

    return (
        <button onClick={handleClick}>
            {state ? "ON" : "OFF"}
        </button>
    );
}
