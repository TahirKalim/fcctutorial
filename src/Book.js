import React from 'react'

const Book = ({img,title,author}) => {
  //attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world');
  }
  return (
  <article className='book' onMouseOver={()=> { console.log(title)}}>
   <img src={img} alt="" />
   <h1>{title}</h1>
   <h3 >{author}</h3>
   <button type='button' onClick={clickHandler}>Button</button>
    </article>)
}
export default Book
