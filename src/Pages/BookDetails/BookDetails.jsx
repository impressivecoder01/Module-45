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
        <div className="card card-side bg-base-100 my-4 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h1 className="text-2xl">{author}</h1>
    <p className="text-2xl">{bookName}</p>
    <h2 className="card-title">{publisher}</h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
      <button className='btn btn-primary'>Read</button>
      <button className='btn btn-primary'>WishList</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;