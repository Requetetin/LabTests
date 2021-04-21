import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import '../Styles/Divs.css'
import Math from '../lib/math'

const Calculator = () => {
  const [current, setCurrent] = useState('')
  const [a, setA] = useState(0)
  const [op, setOp] = useState('')
  const [set, setSet] = useState(false)

  const empty = () => {
    setCurrent(() => (''))
    setA(0)
    setOp('')
    setSet(false)
  }

  const doOp = () => {
    let result = 0
    if (op === '+') {
      result = Math.sum(a, current)
      if (result.toString().length < 10) {
        setA(result)
        return (setCurrent(result.toString()))
      }
    }
    if (op === '-') {
      result = Math.sub(a, current)
      if (result < 0) { return (setCurrent('ERROR')) }
      if (result.toString().length < 10) {
        setA(result)
        return (setCurrent(result.toString()))
      }
    }
    if (op === '*') {
      result = Math.mul(a, current)
      if (result.toString().length < 10) {
        setA(result)
        return (setCurrent(result.toString()))
      }
    }
    if (op === '/') {
      result = Math.div(a, current)
      if (result.toString().length < 10) {
        setA(result)
        return (setCurrent(result.toString()))
      }
    }
    return setCurrent('ERROR')
  }

  const setDiv = () => {
    if (op === '') {
      setA(current)
      setOp('/')
      setSet(true)
    } else {
      setSet(true)
      doOp()
      setOp('/')
    }
  }

  const setSum = () => {
    if (op === '') {
      setA(current)
      setOp('+')
      setSet(true)
    } else {
      setSet(true)
      doOp()
      setOp('+')
    }
  }

  const setDif = () => {
    if (op === '') {
      setA(current)
      setOp('-')
      setSet(true)
    } else {
      setSet(true)
      doOp()
      setOp('-')
    }
  }

  const setMul = () => {
    if (op === '') {
      setA(current)
      setOp('*')
      setSet(true)
    } else {
      setSet(true)
      doOp()
      setOp('*')
    }
  }

  const handleChange = (event) => {
    setCurrent(event.target.value)
  }

  const one = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}1`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('1')
    }
  }

  const two = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}2`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('2')
    }
  }

  const three = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}3`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('3')
    }
  }

  const four = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}4`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('4')
    }
  }

  const five = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}5`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('5')
    }
  }

  const six = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}6`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('6')
    }
  }

  const seven = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}7`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('7')
    }
  }

  const eight = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}8`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('8')
    }
  }

  const nine = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}9`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('9')
    }
  }

  const zero = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.length < 9) { return (`${oldValue}0`) }
        return (oldValue)
      })
    } else {
      setSet(false)
      setCurrent('0')
    }
  }

  const dot = () => {
    if (!set) {
      setCurrent((oldValue) => {
        if (oldValue.includes('.') || oldValue.length > 8) {
          return (oldValue)
        }
        return (`${oldValue}.`)
      })
    } else {
      setSet(false)
      setCurrent('.')
    }
  }

  const changeSign = () => {
    setCurrent((oldValue) => {
      if ((oldValue.length > 8 && !oldValue.includes('-')) || (oldValue.length > 9)) { return (oldValue) }
      const toChange = parseInt(oldValue, 10) * -1
      return (toChange.toString())
    })
  }

  const aesthetics = () => {
    // eslint-disable-next-line no-alert
    alert('este boton esta aqui para que se viera estetico y simetrico')
  }

  return (
    <div className="grid-container">
      <Input value={current} onChange={handleChange} />
      <Button title="C" className="empty" onClick={empty} />
      <Button title="()" className="number" onClick={aesthetics} />
      <Button title="%" className="number" onClick={aesthetics} />
      <Button title="/" className="operator" onClick={setDiv} />
      <Button title="7" className="number" onClick={seven} />
      <Button title="8" className="number" onClick={eight} />
      <Button title="9" className="number" onClick={nine} />
      <Button title="*" className="operator" onClick={setMul} />
      <Button title="4" className="number" onClick={four} />
      <Button title="5" className="number" onClick={five} />
      <Button title="6" className="number" onClick={six} />
      <Button title="-" className="operator" onClick={setDif} />
      <Button title="1" className="number" onClick={one} />
      <Button title="2" className="number" onClick={two} />
      <Button title="3" className="number" onClick={three} />
      <Button title="+" className="operator" onClick={setSum} />
      <Button title="+/-" className="number" onClick={changeSign} />
      <Button title="0" className="number" onClick={zero} />
      <Button title="." className="number" onClick={dot} />
      <Button title="=" className="equals" onClick={doOp} />
    </div>
  )
}

export default Calculator
