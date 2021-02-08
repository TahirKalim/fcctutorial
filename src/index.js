import  React from 'react'
import ReactDOM from 'react-dom'

//css
import './index.css'

// setup vars
const firstBook = {
  img: 'https://multimedia.knv.de/cover/69/41/77/6941774600001Z.jpg',
  title: 'Bestseller I love you to the Moon and Back',
  author: 'Susan Wiggs'
}
const secondBook = {
  img: 'https://multimedia.knv.de/cover/74/86/89/7486897600001Z.jpg',
  title: 'Bestseller I love you ',
  author: 'Wiggs'
}

function BookList(){
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = ({img, title, author}) => {
  // const {img, title, author} = props;
  return (
  <article className='book'>
   <img src={img} alt="" />
   <h1>{title}</h1>
   <h3 >{author}</h3>
    </article>)
}

ReactDOM.render(<BookList />, document.getElementById('root'))
