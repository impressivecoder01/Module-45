import { Star } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addtoDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook  = data.find(book=> book.bookId === bookId)
    console.log(singleBook)
    const handleMarkAsRead = id => {
      // store with id
      // where to store 
      // array of collection
      // if data is already exist then show a alert
      // if book not exist then push in the collection or array
      addToStoreDB(id)
      MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
    }
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
      <button onClick={()=>handleMarkAsRead(id)} className='btn btn-primary'>Mark as read</button>
      <button className='btn btn-primary'>Add to wishList</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;