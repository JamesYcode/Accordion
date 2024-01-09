
import AccordionList from './AccordionList';
import star from '../assets/images/icon-star.svg';

export default function Accordion({ data }) {


  return (
    <div className='accordion-container'>
      <div className='accordion'>
        <h1><img className='star' src={ star } alt="star icon" /> FAQs</h1>
        { data.map(el => (
          <AccordionList title={ el.title }>
            { el.text }
          </AccordionList>
        )) }
      </div>
    </div>
  );
}
