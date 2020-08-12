import React, { createContext, useState } from 'react'

// #1
// const ColorContext = createContext({color: 'black'})

/**
 * #2
 * Context의 value에는 무조건 상태 값만 있어야 하는 것은 아니다.
 * 함수를 전달해 줄 수도 있다.
 */
const ColorContext = createContext({
  state: { color: 'balck', subcolor: 'red' },
  actions: {
    setColor: () => { },
    setSubColor: () => { }
  }
})

// Provider에서 useState, actions 를 반드시 묶어서 전달할 필요는 없다.
// 그렇지만 따로따로 분리해 주면 다른 컴포넌트에서 Context의 값을 사용할 때 편하다.
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black')
  const [subcolor, setSubcolor] = useState('red')

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  }

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext

// ColorProvider와 ColorConsumer 내보내기
export {ColorProvider, ColorConsumer}

export default ColorContext