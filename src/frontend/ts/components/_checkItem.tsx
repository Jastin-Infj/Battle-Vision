import React from 'react';

interface Props {
  text: string;
}

function CheckBoxItem(props:Props) {
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