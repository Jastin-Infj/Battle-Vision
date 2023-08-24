import React from "react";

type InputTypes = 'checkbox' | 'radio';

interface Props_Base {
  id: string;
  classname?: string;
  children: string | JSX.Element | JSX.Element[];
  type?: InputTypes;
  name?: string;
}

interface Controll extends Props_Base {
  checked?: boolean;
  defaultChecked? : never;
}

interface UnControll extends Props_Base {
  checked?: never;
  defaultChecked?: boolean;
}

interface Radio_Controll extends Controll {
  type: "radio";
}

interface Radio_UnControll extends UnControll {
  type: "radio";
}

type Props = Controll | UnControll | Radio_Controll | Radio_UnControll;

function ModeSelect(props:Props) {
  const defaultTypes:InputTypes = "checkbox";

  return (
    <>
      <input id={props.id} className={props.classname} name={props.name} type={props.type ? props.type : defaultTypes} checked={props.checked} defaultChecked={props.defaultChecked} />
      <label htmlFor={props.id} className={props.classname} id={props.id}>
        {props.children}
      </label>
    </>
  );
}

export default ModeSelect;