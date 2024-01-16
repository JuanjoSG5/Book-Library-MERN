# Project 4

## API

The api that i am going to use for this project is this on [openlibrary.org](https://openlibrary.org/developers/api)

## Motivación

I really like reading and it can make it helpful to find good books that I enjoy since sometimes it can be hard to find books a specific topic

## Descipción de la aplicación

The aplication is a book library where the users can save the books that they are interested in, currently there are only 3 possibles ways to filter the books that you are searching by new, old or in a randomize order due how the API has it's endpoints 

## Descripcion de las páginas y funcionalidades a implementar

For starters, the main page will be the searcher where you can search for books by their subject. I also want to add a favorite page to store your favorite books that can only be accessed after loggin in, if you aren't logged in and try to add it to your favorites it will lead to the log in page.

The log in page will be a simple log in page where you can log in or create an account.

 In the user profile you can find your favorites, as well as your information being able to edit some of it like the description.

About the contact page it will be a simple contact page that allows you to write an email.

## Comprobación de los endpoints de la API.

The main endpoint that are going to be used in the project are:
    - [Search by subject](https://openlibrary.org/dev/docs/api/love): Where you input the subject of the book and it returns the corresponding matches
    - [Search by ISBN](https://openlibrary.org/dev/docs/api/books): Basically, it searchs for the books identifier which we can obtain using the subject endpoint

## Posibles ampliaciones

Another page i would like to add is a for later page where you can store the books that you want to read but you currently can't.

I would also like to use this other endpoint to search:
    - [search](https://openlibrary.org/dev/docs/api/search): It is a bit more complex than the other ones but the addition of this endpoint would also allow the possibility to search by author and to add authors to it's own favorite page as well
