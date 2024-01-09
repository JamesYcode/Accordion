import { useState } from "react";
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';



export default function AccordionList({ children, title }) {
  const [toggle, setToggle] = useState(false);


  function handleToggle() {
    setToggle(prev => !prev);
  }
  return (
    <>
      <div className='accordion-list' onClick={ handleToggle }>
        <p className="title">{ title }</p>
        {/* <p className={ `plus-minus ${ toggle ? 'toggled' : '' }` }>{ toggle ? '-' : '+' }</p> */ }
        { !toggle ? <img className="plus-minus" src={ plusIcon } alt="expand or collaspe accordion" /> : <img className="plus-minus" src={ minusIcon } alt="expand or collaspe accordion" /> }
      </div>
      <div className="text">
        { toggle ? children : '' }
      </div>

    </>
  );
}
