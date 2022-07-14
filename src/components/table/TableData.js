import React, { useState, useEffect } from 'react'
import { Table, Column, HeaderCell, Cell, } from 'rsuite-table'
import dataValue from '../data.json'
import PopUp from './PopUp'

export default function TableData() {

  // const nodes = dataValue

  console.log(dataValue);

  const [input, setInput] = useState(dataValue)


  const [surnName, setSurnName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [id, setId] = useState('')
  const [country, setCountry] = useState('')

  // const inputHandle = (e) => {
  //   // e.preventDefault();
  //   let lowerCase = e.target.value.toLowerCase()
  //   console.log(e.target.value)
  //   //  console.log(searchData, 'searchdata')
  //   //  setSearchData(lowerCase, 'lowercase')

  //   //    const data = {
  //   //      nodes: Object.values(nodes).forEach((item) => {
  //   //        return  item.name?.toLowerCase().includes(lowerCase) !== item
  //   //      } )
  //   //    }
  //   //   console.log(nodes);
  // }

  // const fun = (e) => {
  //   let arr = []

  //   nodes.forEach((data) => {
  //     if (
  //       data.Surnname.toLowerCase().includes(surnName.toLowerCase())
  //       // ||
  //       // data.id.toLowerCase().includes(e.toLowerCase()) ||
  //       // data.first_name.toLowerCase().includes(e.toLowerCase()) ||
  //       // data.middle_name.toLowerCase().includes(e.toLowerCase()) ||
  //       // data.country_code.toLowerCase().includes(e.toLowerCase())
  //     ) {
  //       arr.push(data)
  //     }
  //   })

  //   console.log(arr)
  //   setInput(arr)
  // }

  // useEffect(() => {
  //   console.log(surnName)
  // }, [surnName])


 

  return (
    <div>
     

      <div className=' flex flex-col items-center justify-center bg-black'>
        <PopUp
          setSurnName={setSurnName}
          setId={setId}
          setMiddleName={setMiddleName}
          setCountry={setCountry}
          setFirstName={setFirstName}
          surnName={surnName}
          firstName={firstName}
          id={id}
          middleName={middleName}
          country={country}
          input={input}
          setInput={setInput}
        />
      </div>

      {/* Table 1 */}
      <div className=' flex  items-left  bg-purple-200'>
        <h4 className='m-3'>Person</h4>
      </div>
      <Table
        height={400}
        data={input.data}
        onRowClick={(data) => {
          console.log(data)
        }}
        className='w-4/5'
      >
        <Column width={20} align='center'>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={100}>
          <HeaderCell> Action</HeaderCell>
          <Cell dataKey='action' />
        </Column>

        <Column width={100}>
          <HeaderCell>Date activation</HeaderCell>
          <Cell dataKey='date_activation' />
        </Column>

        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey='gender' />
        </Column>

        <Column width={100}>
          <HeaderCell>ActiveStatus</HeaderCell>
          <Cell dataKey='active_status' />
        </Column>

        <Column width={100}>
          <HeaderCell> Deceerd</HeaderCell>
          <Cell dataKey='deceerd' />
        </Column>

        <Column width={150}>
          <HeaderCell>BirthPlace</HeaderCell>
          <Cell dataKey='birth_place' />
        </Column>
        <Column width={200}>
          <HeaderCell>Address_line</HeaderCell>
          <Cell dataKey='address_line' />
        </Column>
        <Column width={200}>
          <HeaderCell>Address_city</HeaderCell>
          <Cell dataKey='address_city' />
        </Column>
        <Column width={150}>
          <HeaderCell>Address_country</HeaderCell>
          <Cell dataKey='address_country' />
        </Column>
        <Column width={150}>
          <HeaderCell>NameType</HeaderCell>
          <Cell dataKey='name_type' />
        </Column>
        <Column width={100}>
          <HeaderCell>Tickhoc</HeaderCell>
          <Cell dataKey='tickhoc' />
        </Column>
        <Column width={150}>
          <HeaderCell>FirstName</HeaderCell>
          <Cell dataKey='first_name' />
        </Column>
        <Column width={100}>
          <HeaderCell>MiddleName</HeaderCell>
          <Cell dataKey='middle_name' />
        </Column>
        <Column width={150}>
          <HeaderCell>Surnname</HeaderCell>
          <Cell dataKey='Surnname' />
        </Column>
        <Column width={100}>
          <HeaderCell>medianName</HeaderCell>
          <Cell dataKey='medianName' />
        </Column>
        <Column width={60}>
          <HeaderCell>Suffix</HeaderCell>
          <Cell dataKey='suffix' />
        </Column>
        <Column width={100}>
          <HeaderCell>SinglarName</HeaderCell>
          <Cell dataKey='singlar_name' />
        </Column>
        <Column width={100}>
          <HeaderCell>option</HeaderCell>
          <Cell dataKey='Surnname'>
            <div className='flex gap-3 items-center cursor-pointer '>
              <img
                src='https://i.ibb.co/m0C7yh7/grid.png'
                className='h-[25px] w-[25px]'
                alt=''
              />
              <img
                src='https://i.ibb.co/7yjxWSv/share.png'
                className='h-[15px] w-[15px]'
                alt=''
              />
            </div>
          </Cell>
        </Column>
      </Table>

      {/* Table 2 */}
      <div className=' flex items-left  bg-purple-200'>
        <div className='w-1/5 border-r-4 ml-7'>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Numbers</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
        <div className='w-1/5 border-r-4 '>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Description</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
        <div className='w-2/5 border-r-4  '>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Countries</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
        <div className='w-1/5 border-r-4  '>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Dates</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
      </div>
      <Table
        height={400}
        data={input.data}
        onRowClick={(data) => {
          console.log(data)
        }}
      >
        <Column width={40} align='center'>
          <HeaderCell>Id</HeaderCell>
          <div className=''>
            <Cell dataKey='id' />
          </div>
        </Column>

        <Column width={100}>
          <HeaderCell> Doc Type</HeaderCell>
          <div className=''>
            <Cell dataKey='doc_type' />
          </div>
        </Column>

        <Column width={100}>
          <HeaderCell> Value</HeaderCell>
          <div className='w-[100px]'>
            <Cell dataKey='value' />
          </div>
        </Column>

        <Column width={100}>
          <HeaderCell className='border-r-4 '>Notes</HeaderCell>
          <Cell dataKey='notes' className='border-r-4 ' />
        </Column>

        <Column width={60}>
          <HeaderCell>id</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={100}>
          <HeaderCell> DeceerdID</HeaderCell>
          <Cell dataKey='deceerd_id' />
        </Column>

        <Column width={150}>
          <HeaderCell className='border-r-4 '>Description</HeaderCell>
          <Cell dataKey='description' className='border-r-4 ' />
        </Column>
        <Column width={40}>
          <HeaderCell>id</HeaderCell>
          <Cell dataKey='id' />
        </Column>
        <Column width={100}>
          <HeaderCell>Country Type</HeaderCell>
          <Cell dataKey='country_type' />
        </Column>
        <Column width={100}>
          <HeaderCell>Country Code</HeaderCell>
          <Cell dataKey='country_code' />
        </Column>
        <Column width={100}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey='name' />
        </Column>
        <Column width={100}>
          <HeaderCell>islecopy</HeaderCell>
          <Cell dataKey='islecopy' />
        </Column>
        <Column width={182}>
          <HeaderCell>Ph Code</HeaderCell>
          <Cell dataKey='ph_code' className='border-r-4 ' />
        </Column>
        <Column width={40}>
          <HeaderCell>id</HeaderCell>
          <Cell dataKey='id' />
        </Column>
        <Column width={100}>
          <HeaderCell>Date type</HeaderCell>
          <Cell dataKey='date_type' />
        </Column>
        <Column width={100}>
          <HeaderCell>Date</HeaderCell>
          <Cell dataKey='date' />
        </Column>
        <Column width={100}>
          <HeaderCell>Date PM</HeaderCell>
          <Cell dataKey='date_pm' />
        </Column>
      </Table>

      {/* Table 3 */}
      <div className=' flex items-left   bg-purple-200'>
        <div className='w-2/5 ml-7 border-r-4  '>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Saction</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
        <div className='w-3/5'>
          <div className='flex justify-between  items-center'>
            <h4 className='m-3'>Role</h4>
            <div className='border-2 bg-white w-[30px] h-[30px]'></div>
          </div>
        </div>
      </div>
      <Table
        height={400}
        data={input.data}
        onRowClick={(data) => {
          console.log(data)
        }}
      >
        <Column width={40} align='center'>
          <HeaderCell className=''>Id</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={80}>
          <HeaderCell> List Code</HeaderCell>
          <Cell dataKey='list_code' />
        </Column>

        <Column width={80}>
          <HeaderCell>Date Start</HeaderCell>
          <Cell dataKey='date_start' />
        </Column>

        <Column width={80}>
          <HeaderCell>Date Stop</HeaderCell>
          <Cell dataKey='date_stop' />
        </Column>

        <Column width={80}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey='name' />
        </Column>

        <Column width={80}>
          <HeaderCell> Status</HeaderCell>
          <Cell dataKey='status' />
        </Column>

        <Column width={50}>
          <HeaderCell>RT</HeaderCell>
          <Cell dataKey='rt' />
        </Column>
        <Column width={80}>
          <HeaderCell>Descr2</HeaderCell>
          <Cell dataKey='descr2' />
        </Column>
        <Column width={80}>
          <HeaderCell
            className='border-x-4  '
          >
            Descr1
          </HeaderCell>
          <Cell dataKey='descr1' className='border-r-4  ' />
        </Column>
        <Column width={40}>
          <HeaderCell>id</HeaderCell>
          <Cell dataKey='id' />
        </Column>
        <Column width={150}>
          <HeaderCell>RoleType</HeaderCell>
          <Cell dataKey='role_type' />
        </Column>
        <Column width={150}>
          <HeaderCell>Start date</HeaderCell>
          <Cell dataKey='start_date' />
        </Column>
        <Column width={150}>
          <HeaderCell>Stop date</HeaderCell>
          <Cell dataKey='stop_date' />
        </Column>
        <Column width={150}>
          <HeaderCell>code</HeaderCell>
          <Cell dataKey='code' />
        </Column>
        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey='name' />
        </Column>
        <Column width={150}>
          <HeaderCell>Take</HeaderCell>
          <Cell dataKey='take' />
        </Column>
      </Table>

      {/* Table 4 */}
      <div className=' flex  items-left  bg-purple-200'>
        <h4 className='m-3'>Associates</h4>
      </div>
      <Table
        height={400}
        data={input.data}
        // data={nodes}
        onRowClick={(data) => {
          console.log(data)
        }}
      >
        <Column width={40} align='center'>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={100}>
          <HeaderCell> Assoc Id</HeaderCell>
          <Cell dataKey='assoc_id' />
        </Column>

        <Column width={90}>
          <HeaderCell> Ex</HeaderCell>
          <Cell dataKey='ex' />
        </Column>

        <Column width={90}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey='type' />
        </Column>

        <Column width={90}>
          <HeaderCell>Red Name</HeaderCell>
          <Cell dataKey='red_name' />
        </Column>

        <Column width={70}>
          <HeaderCell> Action</HeaderCell>
          <Cell dataKey='action' />
        </Column>

        <Column width={90}>
          <HeaderCell>Date action</HeaderCell>
          <Cell dataKey='date_action' />
        </Column>
        <Column width={70}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey='gender' />
        </Column>
        <Column width={90}>
          <HeaderCell>ActiveStatus</HeaderCell>
          <Cell dataKey='active_status' />
        </Column>
        <Column width={80}>
          <HeaderCell>Deceased</HeaderCell>
          <Cell dataKey='deceased' />
        </Column>
        <Column width={100}>
          <HeaderCell>BirthPlace</HeaderCell>
          <Cell dataKey='birth_place' />
        </Column>
        <Column width={100}>
          <HeaderCell>Address_line</HeaderCell>
          <Cell dataKey='address_line' />
        </Column>
        <Column width={100}>
          <HeaderCell>Address_city</HeaderCell>
          <Cell dataKey='address_city' />
        </Column>
        <Column width={100}>
          <HeaderCell>Address_country</HeaderCell>
          <Cell dataKey='address_country' />
        </Column>
        <Column width={100}>
          <HeaderCell>NameType</HeaderCell>
          <Cell dataKey='name_type' />
        </Column>
        <Column width={80}>
          <HeaderCell>Tickhoc</HeaderCell>
          <Cell dataKey='tickhoc' />
        </Column>
        <Column width={100}>
          <HeaderCell>Firstname</HeaderCell>
          <Cell dataKey='first_name' />
        </Column>
        <Column width={100}>
          <HeaderCell>Midname</HeaderCell>
          <Cell dataKey='midname' />
        </Column>
        <Column width={100}>
          <HeaderCell>Surname</HeaderCell>
          <Cell dataKey='Surnname' />
        </Column>
        <Column width={100}>
          <HeaderCell>MiddanName</HeaderCell>
          <Cell dataKey='middan_name' />
        </Column>
        <Column width={60}>
          <HeaderCell>Surffix</HeaderCell>
          <Cell dataKey='surffix' />
        </Column>
        <Column width={100}>
          <HeaderCell>SinglarName</HeaderCell>
          <Cell dataKey='singlar_name' />
        </Column>
        <Column width={80}>
          <HeaderCell>Option</HeaderCell>
          <Cell dataKey='Surnname'>
            <div className='flex gap-3 items-center cursor-pointer '>
              <img
                src='https://i.ibb.co/m0C7yh7/grid.png'
                className='h-[25px] w-[25px]'
                alt=''
              />
              <img
                src='https://i.ibb.co/7yjxWSv/share.png'
                className='h-[15px] w-[15px]'
                alt=''
              />
            </div>
          </Cell>
        </Column>
      </Table>
    </div>
  )
}
