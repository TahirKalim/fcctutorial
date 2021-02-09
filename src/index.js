import  React from 'react'
import ReactDOM from 'react-dom'

//css
import './index.css'

// setup vars
const books = [
  {
  id:1,
  img: 'https://multimedia.knv.de/cover/69/41/77/6941774600001Z.jpg',
  title: 'Bestseller I love you to the Moon and Back',
  author: 'Susan Wiggs'
},
{
  id:2,
  img: 'https://multimedia.knv.de/cover/74/86/89/7486897600001Z.jpg',
  title: 'Bestseller I love you ',
  author: 'Wiggs'
},
{
  id:3,
  img: 'https://multimedia.knv.de/cover/80/78/49/8078493400001Z.jpg',
  title: 'fur kleine kinder',
  author: 'Paunter'
}
]
  
function BookList(){
  return (
    <section className='booklist'>
     {books.map((book, index)=>{
       const { img,title,author} = book
       return(
         <Book key={book.id} {...book}></Book>
       )
     })
     }
    </section>
  )
}

const Book = (props) => {
  const { img, title, author} = props
  return (
  <article className='book'>
   <img src={img} alt="" />
   <h1>{title}</h1>
   <h3 >{author}</h3>
    </article>)
}

ReactDOM.render(<BookList />, document.getElementById('root'))
