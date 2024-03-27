import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Header from './components/Hader/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
   
   const [readingTime,setRedingTime]=useState(0);

  const handleAddToBookmark=blog=>{
   const newBookmarks=[...bookmarks,blog];
   setBookmarks(newBookmarks)
  
  }
   
  const handleMarkAsRead=time=>{
    const newReadingTime = readingTime + time;
    setRedingTime(newReadingTime);
 
  }

  return (
    <>
       <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
       
    </>
  )
}

export default App
