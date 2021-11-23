import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { TodoList } from './components/TodoList/TodoList'

import styles from './index.css'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
          <h2>Todos</h2>
          <Header />
          <TodoList />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App
