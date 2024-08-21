import React from 'react';

function HelloReact() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#282c34' // Optional: Set a background color for the entire container
        }}>
            <h1 style={{
                color: 'white',
                padding: '20px',
                border: '2px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#444' // Optional: Set a background color for the text container
            }}>
                Hello, React!
            </h1>
        </div>
    );
}

export default HelloReact;
