// import React from 'react'
// import {data} from '../restApi.json'// //fetching content to display in rest api
// function Qualities() {
//   return (
//     <section className="qualities" id ="qualities">
//        <div className="container">
//        data[0].ourQualities.map(element =>(
//         <div className="card"key={element.id}>
//             <img src={element.image} alt={element.title}/>
//             <div className="title">{element.title}</div>
//         <p className="description">{element.description}</p>
//         </div>
//        ))
//         </div> 
//     </section>
//   );
// };

// export default Qualities
import React from 'react'
import {data} from '../restApi.json'
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data[0].ourQualities.map(element=>{
                return(
                  <div className='card' key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Qualities
