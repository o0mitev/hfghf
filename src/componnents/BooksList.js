import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {
    render(){
        console.log(this.props)
        let books = this.props.books;
        let jsxBooksList = books.map(book => (
           <div className="book-list">
            <h1>{ book.books }</h1>
            <p>{ book.author }</p>
           </div> 
        ))
        return(
        <div>{jsxBooksList}</div>
        )
    }
}

let mapStateToProps = (state) => (
    {
        books: state.books
    }
)

export default connect(mapStateToProps)(BooksList);