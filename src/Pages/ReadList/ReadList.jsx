import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addtoDB';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData()
    // console.log(data)
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState("")
    const handleSort = (sortType) => {
      setSort(sortType)
      if(sortType == 'pages'){
        const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
        setReadList(sortedByPage)
      }
      if(sortType == 'ratings'){
        const sortByRatings = [...readList].sort((a,b)=> a.rating - b.rating)
        setReadList(sortByRatings)
      }
    }
    useEffect(()=> {
        const storedBookData  = getStoredBook()
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    },[])
    return (
        <div>
          <details className="dropdown">
  <summary className="btn m-1">Sort by: {sort? sort : ''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=> handleSort("pages")} >Pages</a></li>
    <li><a onClick={()=> handleSort("ratings")}>Ratings</a></li>
  </ul>
</details>
             <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My wish list</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I Read {readList.length}</h2>
      {
        readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;