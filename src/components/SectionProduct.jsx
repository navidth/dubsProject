import React from 'react'

function SectionProduct(props) {
  return (
    <section className="mx-1 g-3 align-items-center w3-animate-opacity">
        {props.children}
    </section>
  )
}

export default SectionProduct