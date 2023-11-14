import React from 'react'

function SectionAllPrudoct(props) {
  return (
    <section className='card-prudoct me-5 rounded mb-5'>
        {props.children}
    </section>
  )
}

export default SectionAllPrudoct;