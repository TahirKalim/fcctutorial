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
// const title = 'Bestseller I love you to the Moon and Back'
// const author = 'Susan Wiggs'
// const img = "https://m.media-amazon.com/images/I/81o3eY5E-rL._AC_UL320_.jpg" 

function BookList(){
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
  
}

const Book = (props) => {

  return (
  <article className='book'>
   <img src={props.img} alt="" />
   <h1>{props.title}</h1>
   <h3 >{props.author}</h3>
    </article>)
}
// const Image = () => <img src="https://m.media-amazon.com/images/I/81o3eY5E-rL._AC_UL320_.jpg" alt="" />

// const Title = () => <h1>Bestseller I love you to the Moon and Back</h1>
// const Author = () => <h3 style={{color: '#617d98', fontSize:'0.75rem',marginTop:'0.25rem'}}>Susan Wiggs</h3>
ReactDOM.render(<BookList />, document.getElementById('root'))
