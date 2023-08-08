import React from 'react'

export default function Child({ parentToChild, child }) {
    console.log(parentToChild)
    const data = parentToChild;
    // const m = function hello() {
    //     ////
    // }
    // m()
    const text = 'I am A child';
    child(text)
  return (
      <>
          <div> This is the child with age {data}</div>
          {/* <button onClick={()=>child(text)}>Click Me</button> */}
      </>
  )
}
