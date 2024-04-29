import React from 'react'

const TemplateCard = ({ elem }) => {
  return (
    <>
      <div className="templateCard shadow-xl">
        <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.toocss.com/wp-content/uploads/2023/05/lugx-toocss.jpg" alt="" />
        <div className="temContent">
          <h3>{elem.title}</h3>
          <p>{elem.description}</p>
           
           <div className="temBottom">
            <p className="price text-lg">{elem.price === 0 ? <span className="text-green-600">FREE</span> : "$"+elem.price}</p>
            <p className='text-green-600 text-lg'>Off {elem.discount}%</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default TemplateCard