import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
//booksAPI key = AIzaSyDSKcVsdz8H67qHxiTIB3dnBz2JWQixTNU
const STORE = {
  items: [
    { author: 'Banana', price: 100 },
    { author: 'Apple', price: 33.99 },
    { author: 'Orange', price: 33.99 },
  ],

}

function FilterBox({ text, onChange }) {
  return (
    <form>
      <label>
        Filter
      <input type="text" value={text || ''} onChange={(ev) => { onChange(ev.target.value) }} />
      </label>
    </form>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: null,
    }
  }

  setFilter = (filterText) => {
    this.setState({ filterText })
  }

  render() {
    let { filterText } = this.state
    let filteredItems = [...STORE.items]
    if (filterText) {
      filteredItems = filteredItems.filter(i => {
        // console.log(i)
        const ciAuthor = i.author.toLocaleLowerCase()
        const ciFilter = filterText.toLocaleLowerCase()
        return ciAuthor.includes(ciFilter)
      })
    }

    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar />
        <FilterBox text={filterText} onChange={this.setFilter} />
        <BookList items={filteredItems} />
      </main>
    );
  }
}

export default App;
