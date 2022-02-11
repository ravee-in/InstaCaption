import React from 'react';

export default function Alert(props) {
  return (
    <div className='w-100' style={{height: "60px", position: "fixed", bottom: "0"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <small>{props.alert.msg}</small>
    </div>}
    </div>
  );
}
