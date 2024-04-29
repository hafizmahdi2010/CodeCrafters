import React from 'react'

const Card = () => {
  return (
    <>
      <div className="card relative">
        <img src="https://www.filepicker.io/api/file/eYA6E8L3TiGl0GxpQoS6" alt="" />

        <div className="cardContent">
          <p className='text-slate-600 uppercase'>Web Development</p>
          <h3 className='text-2xl line-clamp-1'>HTML5 & CSS</h3>
          <p className=' line-clamp-4 text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto delectus perferendis illum molestiae odit repudiandae amet dolorum doloribus saepe autem a ad perspiciatis reprehenderit necessitatibus sit temporibus consectetur hic impedit, magnam dolores facilis commodi!</p>

          <div className="card-bottom absolute bottom-5 flex items-center gap-3">
            <p className=' text-xl text-slate-700'>$34</p>
            <p className=' text-green-500 text-lg'>Off 20%</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Card