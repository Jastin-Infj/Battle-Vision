import React from 'react';

function CheckBoxItem(props) {
  return (
    <>
      <label>
        <input type='checkbox' />
        <span />
        {props.text}
      </label>
    </>
  );
}

export default CheckBoxItem;