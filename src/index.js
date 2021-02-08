import  React from 'react'
import ReactDOM from 'react-dom'

//css
import './index.css'

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
  
}
const author = 'Susan Wiggs'
const Book = () => {

  const title = 'Bestseller I love you to the Moon and Back'

  return (

  <article className='book'>
   <img
    src="https://m.media-amazon.com/images/I/81o3eY5E-rL._AC_UL320_.jpg" alt="" />
   <h1>{title}</h1>

   <h3 >{author.toUpperCase()}</h3>

   <p>{6+6} </p>
   
    </article>)
}
// const Image = () => <img src="https://m.media-amazon.com/images/I/81o3eY5E-rL._AC_UL320_.jpg" alt="" />

// const Title = () => <h1>Bestseller I love you to the Moon and Back</h1>
// const Author = () => <h3 style={{color: '#617d98', fontSize:'0.75rem',marginTop:'0.25rem'}}>Susan Wiggs</h3>
ReactDOM.render(<BookList />, document.getElementById('root'))
