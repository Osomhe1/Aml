import React, { useState, useEffect } from 'react'
import dataValue from '../data.json'
import { Input, Button } from 'rsuite'
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine'
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine'


const PopUp = ({
  setFirstName = '',
  setSurnName = '',
  setMiddleName = '',
  setId = '',
  setCountry = '',
  setInput = '',
  input = '',
  surnName ,
  firstName ,
  middleName ,
  id,
  country,
}) => {


  const [showModal, setShowModal] = useState(false)

  // const [input, setInput] = useState(nodes)
  // const [surnName, setSurnName] = useState('')
  // const [firstName, setFirstName] = useState('')
  // const [middleName, setMiddleName] = useState('')
  // const [id, setId] = useState('')
  // const [country, setCountry] = useState('')
    
   

  // const fun = () => {
  //   let arr = []

  //   dataValue.data.forEach((data) => {
  //     if (
  //       data.id.toString().toLowerCase().includes(id) ||
  //       data.Surnname.toLowerCase().includes(surnName) ||
  //       data.first_name.toLowerCase().includes(firstName) ||
  //       data.middle_name.toLowerCase().includes(middleName) ||
  //       data.country_code.toLowerCase().includes(country)
  //     ) {
  //       arr.push(dataValue.data)
  //       // setFirstName(data.Surnname)
  //       // setFirstName(data.firstName)
  //       console.log(data.firstName)
  //       setFirstName(data.id)
  //       console.log(data.id)
  //     }
  //   })
  //   // console.log(arr)
  //   setInput(arr)
  //   console.log(input)
  //   // console.log(setInput)
   
  // }

  let query = (
  //   {
  //   firstName,
  //   Surnname,
  //   middleName,
  //   id,
  //   country,
  // }
  ) =>{
    let filtered = dataValue.data.filter((item) => item.first_name.includes(firstName) ||
     item.Surnname.includes(surnName) ||
     item.middle_name.includes(middleName) ||
     item.id.includes(id) || 
     item.country_code.includes(country));

    return filtered;
  } 

  console.log(query({ firstName: 'Bogays' }), 'query')

  useEffect(() => {
    setSurnName(surnName)
  }, [surnName, setSurnName, firstName, id, country, middleName])

  return (
    <>
      <Button
        className='bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Change search condition
        {showModal ? (
          <ArrowUpLineIcon className='text-black m-2 text-3xl ' />
        ) : (
          <ArrowDownLineIcon className='text-black m-2 text-3xl ' />
        )}
      </Button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-5xl '>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                  <h3 className='text-3xl font=semibold'>
                    Change search condition
                  </h3>
                 
                </div>
                <div className='relative p-6 flex-auto'>
                  <div className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full w-[500px]'>
                    <div className='flex text-black text-sm font-bold mb-1'>
                      <h4 className='m-auto'>Field:</h4>
                      <label htmlFor='country' className='block bg-white w-[200px] text-black text-sm font-bold mb-1 p-2 m-1'>
                        Country code
                      </label>
                      <h4 className='m-auto p-2'>Value</h4>
                      {/* <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' /> */}

                      <Input
                        //   value={country}
                        type='text'
                        onChange={(e) => {
                          setCountry(e)
                          console.log(country)
                        }}
                      />
                    </div>
                    <div className='flex text-black text-sm font-bold mb-1'>
                      <h4 className='m-auto'>Field:</h4>
                      <label htmlFor='first name' className='block bg-white w-[200px] text-black text-sm font-bold mb-1 p-2 m-1'>
                        First Name
                      </label>
                      <h4 className='m-auto p-2'>Value</h4>
                      <Input
                        type='text'
                        // onChange={() => { fun() }}
                        onChange={(e) => {
                          setFirstName(e)
                          // console.log(e)
                          //   console.log(firstName)
                        }}
                      />
                      {/* <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' /> */}
                    </div>
                    <div className='flex text-black text-sm font-bold mb-1'>
                      <h4 className='m-auto'>Field:</h4>
                      <label htmlFor='surn name' className='block bg-white w-[200px] text-black text-sm font-bold mb-1 p-2 m-1'>
                        SurnName
                      </label>
                      <h4 className='m-auto p-2'>Value</h4>
                      <Input
                        type='text'
                        onChange={(e) => {
                          setSurnName(e)
                          console.log(surnName)
                        }}
                        name='surnName'
                        // onChange={(e) => {
                        //   setSurnName(e.target.value)
                        // }}
                      />
                    </div>
                    <div className='flex text-black text-sm font-bold mb-1'>
                      <h4 className='m-auto'>Field:</h4>
                      <label htmlFor='middle name' className='block bg-white w-[200px] text-black text-sm font-bold mb-1 p-2 m-1'>
                        MiddleName
                      </label>
                      <h4 className='m-auto p-2'>Value</h4>
                      <Input
                        type='text'
                        onChange={(e) => {
                          setMiddleName(e)
                          console.log(middleName)
                        }}
                      />
                      {/* <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' /> */}
                    </div>
                    <div className='flex text-black text-sm font-bold mb-1'>
                      <h4 className='m-auto'>Field:</h4>
                      <label htmlFor='id' className='block bg-white w-[200px] text-black text-sm font-bold mb-1 p-2 m-1'>
                        ID
                      </label>
                      <h4 className='m-auto p-2'>Value</h4>
                      <Input
                        type='number'
                        onChange={(e) => {
                          setId(e)
                          console.log(id)
                        }}
                      />
                      {/* <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' /> */}
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center p-6  border-solid border-blueGray-200 rounded-b'>
                  <Button
                    className=' bg-gray-200 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-3 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className=' bg-gray-200 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-2'
                    type='button'
                    // onSubmit={fun}
                    onClick={() => {
                      // fun()
                      query()
                      setShowModal(false)
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default PopUp
