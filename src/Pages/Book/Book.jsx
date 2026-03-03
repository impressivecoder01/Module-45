import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const Book = ({singleBook}) => {
    console.log(singleBook)
    return (
        <Link to={`/bookDetails/${singleBook.bookId}`}>
        <div className="card bg-base-100 w-96 shadow-2xl border p-6">
  <figure className='p-4  bg-gray-200 w-2/3 mx-auto'>
    <img className='h-41.25'
      src={singleBook.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {
      singleBook.tags.map(a=> <h1>{a}</h1>)
    }
    <h2 className="card-title">
      {singleBook.bookName}
      <div className="badge badge-secondary ml-3">
        
        {singleBook.yearOfPublishing}
      </div>
    </h2>
    <p className='border-t-2 border-dashed'></p>
    <div className="card-actions justify-end">
      <div className="badge">{singleBook.category}</div>
      <div className="badge">{singleBook.rating}<Star/></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;