import { Star } from 'lucide-react';
import React from 'react';


const Book = ({singleBook}) => {
    console.log(singleBook)
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4  bg-gray-200 w-2/3 mx-auto'>
    <img className='h-41.25'
      src={singleBook.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {singleBook.bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge">{singleBook.category}</div>
      <div className="badge">{singleBook.rating}<Star/></div>
    </div>
  </div>
</div>
    );
};

export default Book;