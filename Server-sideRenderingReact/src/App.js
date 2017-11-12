import React from 'react';

function App(props) {
    const facts = props.facts.map((fact, i) => {
        return <li key={i}>{fact.text}</li>;
    });

    return (
        <ul>
            {facts}
        </ul>
    );
}

export default App;
