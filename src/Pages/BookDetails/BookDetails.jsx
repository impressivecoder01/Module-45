import { Star } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook  = data.find(book=> book.bookId === bookId)
    console.log(singleBook)
    const {publisher,review,image,author,bookName} = singleBook
    return (
        <div>
            <h1>{publisher}</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default BookDetails;