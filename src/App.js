import './Styles/App.css';
import 'semantic-ui-css/semantic.min.css'
import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ChapterCreatePage,
  BooksShowPage,
  ChaptersShowPage,
  CreateBookPage
} from './Pages'

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const abortCont = new AbortController()
    setTimeout(() => {
      fetch("http://127.0.0.1:8000/books/", { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('Not Found')
          }
          return res.json()
        })
        .then(data => {
          setBooks(data)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            console.log(err.message)
          }
        })

    }, 10000)

    return () => abortCont.abort()
  }, [books])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <BooksShowPage books={books} />
          </Route>
          <Route path='/books/:bookId/write-chapter'>
            <ChapterCreatePage />
          </Route>
          <Route path='/books/:bookId'>
            <ChaptersShowPage books={books} />
          </Route>
          <Route path='/write-book'>
            <CreateBookPage />
          </Route>
        </Switch>
      </div >
    </Router >
  );
}

export default App;
