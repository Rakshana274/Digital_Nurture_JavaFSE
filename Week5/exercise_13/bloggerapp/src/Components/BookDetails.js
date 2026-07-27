import React from "react";

function BookDetails() {

    const books = [

        {
            id: 1,
            title: "React Basics",
            author: "John Smith",
            price: "$25"
        },

        {
            id: 2,
            title: "Java Programming",
            author: "James",
            price: "$30"
        },

        {
            id: 3,
            title: "Python Essentials",
            author: "David",
            price: "$28"
        }

    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {

                    books.map(book => (

                        <li key={book.id}>

                            <b>{book.title}</b>

                            <br />

                            Author : {book.author}

                            <br />

                            Price : {book.price}

                            <br /><br />

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BookDetails;