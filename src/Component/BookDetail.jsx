import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../Utilities/addToDb';

const BookDetail = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book =>book.bookId === id)

    const {bookId:currenBookId, image} = book;
    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    }

    return (
        <div className='my-12'>
            <h2>Book Details : {bookId}</h2>
            <img src={image} className='w-36' alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-outline mr-4 btn-accent'>Read</button>
            <button className='btn btn-accent'>Add to Wish List</button>
        </div>
    );
};

export default BookDetail;