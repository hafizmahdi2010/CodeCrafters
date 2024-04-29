import React, { useState } from 'react'
import AdminNav from '../adminComponents/AdminNav'

const AddTemplate = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [categ, setCateg] = useState("");
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState("");

  // Errors

  const [imageError, setImageError] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  
  const formData = new FormData();


  const addTemplate = async () => {
    console.log("enter in a function")
    await fetch('http://localhost:8000/addTemplate', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log("SuccessFully Get Response.",data);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  }



 async function submitForm(e) {

    

    e.preventDefault();
    console.log("Called.");

    if (image === "") {
      setImageError("Image Is Required !")
    }
    else {
      setImageError("");
    }

    if (title !== "" && desc !== "" && brand !== "" && price !== "" && discount !== "" && categ !== "" && image !== "") {
      console.log("submiting...")

      formData.append("title",title);
      formData.append("desc",desc);
      formData.append("brand",brand);
      formData.append("price",price);
      formData.append("discount",discount);
      formData.append("categ",categ);
      formData.append("image","d:\Untitled.png");
      

      console.log("image : ",image)

      await fetch('http://localhost:8000/addTemplate', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        console.log("SuccessFully Get Response.",data);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
      
      // addTemplate()

      console.log("Completed")
    }
    else {
      console.log("Some Fields Are Not Filed !")
    }

  }


  return (
    <>
      <div className="flex">
        <AdminNav />
        <div className="admincontent">

          <h2 className='lg:text-2xl sm:text-xl mt-7'>Add Template</h2>

          <div className="addTemplateForm">

            <form onSubmit={submitForm} className="mt-[2%]">
              <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setTitle(e.target.value)} value={title} autoComplete='off' type="text" name="floating_title" id="floating_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Title</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea onChange={(e) => setDesc(e.target.value)} value={desc} autoComplete='off' name="floating_desc" id="floating_desc" className="block py-2.5 min-h-[25vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                <label htmlFor="floating_desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input onChange={(e) => setBrand(e.target.value)} value={brand} autoComplete='off' type="text" name="brandName" id="floating_brandName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_brandName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand Name</label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(e) => setPrice(e.target.value)} value={price} autoComplete='off' type="number" name="floating_price" id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price In $</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(e) => setDiscount(e.target.value)} value={discount} autoComplete='off' type="number" name="floating_discount" id="floating_discount" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_discount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discount In %</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input onChange={(e) => setCateg(e.target.value)} value={categ} autoComplete='off' type="text" name="floating_categ" id="floating_categ" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_categ" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>

              </div>

              {/* image Upload */}


              <div class="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input onChange={(e) => setImage(e.target.value)} id="dropzone-file" name='dropzone-file' type="file" class="hidden" />
                </label>
              </div>

              <span style={{marginTop:10}} className="error my-[3vh]">{imageError}</span> <br />



              <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Template</button>
            </form>


          </div>

        </div>
      </div>
    </>
  )
}

export default AddTemplate