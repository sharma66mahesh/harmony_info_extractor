import React from 'react';

const Response = ({ render }) => {
  return(
    <div className='response overflow-auto'>
      <pre>{JSON.stringify(render, null, 2)};</pre>
    </div>
  );
}

export { Response };