import React, { useRef } from 'react'
import './Form.scss';

function Form() {
    const formRef = useRef(null);
    const handleForm = (e) => {
        e.preventDefault();
        
        formRef.current.reset();
    }

  return (
    <form className='form' ref={formRef} onSubmit={handleForm}>
        <input type="email" required placeholder='Your email address' />
        <button type='submit'>Subscribe</button>
    </form>
  )
}

export default Form