import React, { useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState('')

  const handleEqualClick = () => {
    try {
      console.log(value)
      let result
      if (value.includes('sin')) {
        const number = parseFloat(value.replace(/^\D+/g, ''))
        setvalue(Math.sin(number))
      } else if (value.includes('cos')) {
        const number = parseFloat(value.replace(/^\D+/g, ''))
        setvalue(Math.cos(number))
      } else if (value.includes('tan')) {
        const number = parseFloat(value.replace(/^\D+/g, ''))
        setvalue(Math.tan(number))
      }else if (value.includes('log')) {
        const number = parseFloat(value.replace(/^\D+/g, ''))
        setvalue(Math.log(number))
      } else {
        setvalue(eval(value))
      }
    } catch (error) {
      setvalue('Error')
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Calculator</h1>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={value} />
          </div>
          <div>
            <input
              type='button'
              name=''
              id=''
              value='sin'
              style={{ backgroundColor: '#333277' }}
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='AC'
              style={{ backgroundColor: '#F77882' }}
              onClick={(e) => setvalue('')}
            />
            <input
              type='button'
              name=''
              id=''
              value='DE'
              style={{ backgroundColor: '#F77882' }}
              onClick={(e) => setvalue(value.slice(0, -1))}
            />
            <input
              type='button'
              name=''
              id=''
              value='%'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='/'
              onClick={(e) => setvalue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type='button'
              name=''
              id=''
              value='cos'
              style={{ backgroundColor: '#333277' }}
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='7'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='8'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='9'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='*'
              onClick={(e) => setvalue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type='button'
              name=''
              id=''
              value='tan'
              style={{ backgroundColor: '#333277' }}
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='6'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='5'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='4'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='+'
              onClick={(e) => setvalue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type='button'
              name=''
              id=''
              value='log'
              style={{ backgroundColor: '#333277' }}
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='1'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='2'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='3'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='-'
              onClick={(e) => setvalue(value + e.target.value)}
            />
          </div>
          <div className='bottom'>
            <input
              type='button'
              name=''
              id=''
              value='.'
              className='bottom1'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='0'
              className='bottom1'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='('
              className='bottom1'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value=')'
              className='bottom1'
              onClick={(e) => setvalue(value + e.target.value)}
            />
            <input
              type='button'
              name=''
              id=''
              value='='
              className='bottom1'
              onClick={handleEqualClick}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

