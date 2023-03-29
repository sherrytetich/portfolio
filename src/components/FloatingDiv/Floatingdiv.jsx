import React from 'react';

function Floatingdiv({image}) {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            Web
             <br />
             Developer
        </span>
    </div>
  );
}

export default Floatingdiv;
