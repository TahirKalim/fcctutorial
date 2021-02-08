import  React from 'react'
import ReactDOM from 'react-dom'

//css
import './index.css'

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
  
}

const Book = () => {
  return <article className='book'><Image/><Title/><Author/></article>
}
const Image = () => <img src="https://m.media-amazon.com/images/I/81o3eY5E-rL._AC_UL320_.jpg" alt="" />

const Title = () => <h1>Bestseller I love you to the Moon and Back</h1>
const Author = () => <h3>Susan Wiggs</h3>
ReactDOM.render(<BookList />, document.getElementById('root'))
