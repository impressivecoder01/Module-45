import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => {
            setAllBooks(data)
        })
    }, [])
    return (
        <div>
            <h1>Books page</h1>
        </div>
    );
};

export default Books;