import React from 'react'
import ColorBox from './components/ColorBox'
import { ColorProvider } from './contexts/color'
import SelectColors from './components/SelectColors'


// #1 Context.Provider를 사용하여 Context 의 value 변경하기
// <ColorContext.Provider value={{ color: 'red' }}>
// const App = () => {
//   return (
//     <ColorContext.Provider value={{ color: 'red'}}>
//       <div>
//         <ColorBox />
//       </div>
//     </ColorContext.Provider>
//   )
// }

/**
 * #2 ColorContext.Provider를 ColorProvider로 대체하기
 */
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App
