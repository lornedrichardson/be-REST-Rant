const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={ data.place.pic } alt={ data.place.name } />
            <h3>{ data.place.city }, { data.place.state }</h3>
            <h4>{ data.place.cuisines }</h4>
            <h5>Rating: currently unrated</h5>
            <h5>Comments: No comments yet!</h5>
            <div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
              </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show;