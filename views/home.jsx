const React = require('react');
const Def = require('./default');

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/colchuck-lake.jpg" alt="Colchuck Lake" />
          <div>
            Photo by <a href="https://unsplash.com/@kylejeffreys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Johnson</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href='/places'>
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;