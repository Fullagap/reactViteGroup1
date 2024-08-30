import { useState } from 'react'
import { toppings } from './data.js'

function App() {
  // console.log(toppings)
  const [result, setResult] = useState(0)
  // const [toppingOut, setToppingOut] = useState([])
  const checkStatus = (e,named) => {
    // console.log(e.target.value)
    // console.log(named,e.target.value)
    // console.log(e.target.checked )
    let outPut = []

    if (e.target.checked == true) {
      setResult(result + +e.target.value)
    } else { 
      setResult(result - +e.target.value)
    }
  }

  const hdlclick = (e) => {
    e.preventDefault()
    // console.log("hi")
    console.log(e)
    return (
      <div>
        {/* {toppings.map((el,index) => (
            <div key={index}  className="flex justify-between border-red-300 text-center">
              <div>
                <label>
                <input key={index} className='m-1' value={el.price} type="checkbox" onChange={(e)=>checkStatus(e,el.name)} />
                {el.name}</label>
              </div>
              <label>{el.price.toFixed(2)}</label>
            </div>
          ))} */}

      </div>
    )
  }

  

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold pb-3'>Select Topping</h1>
      <div className='border-2 p-3'>
        <div>
          {toppings.map((el,index) => (
            <div key={index}  className="flex justify-between border-red-300 text-center">
              <div>
                <label>
                <input key={index} className='m-1' value={el.price} type="checkbox" onChange={(e)=>checkStatus(e,el.name)} />
                {el.name}</label>
              </div>
              <label>{el.price.toFixed(2)}</label>
            </div>
          ))}
          </div>
        <div className='flex justify-between'>
          <h2>Total</h2>
          <h2 className='border-t-2'>{result.toFixed(2)}</h2>
        </div>
        </div>
        <button className='border-2 border-black rounded mt-4' onClick={hdlclick}>check out</button>
    </div>
  )
}

export default App
