
import './App.css';
import QuoteBox from './components/QuoteBox'

function App() {
  return (
    <div>
          <h1 id="title">Random quote generator</h1>
          <p className='gral-text'>This project is built with a JSON file of quotes from books and authors that I like, taken from my <a href="https://www.goodreads.com/rociocatalano" target="_blank">GoodReads profile</a>. Enjoy! <br/>
          I'll update the document often, so come back and take a look. It was my first React.js app and I had a lot of fun making it.</p>
          <QuoteBox></QuoteBox>
          <p id='credit'>by <a href="https://www.linkedin.com/in/rociocatalano/" target='_blank'>rociocatalano</a></p>
    </div>

  );
}

export default App;
