import React from 'react';
import ReactDOM from 'react-dom';


function myThing(){
  return (
    <div className='book'>
      <div className='title'>
        The title
      </div>
      <div className='author'>
        The author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-3456789-10
        </li>
      </ul>
    </div>
);
}

ReactDOM.render(
  <myThing />,
  document.getElementById('root')
);


