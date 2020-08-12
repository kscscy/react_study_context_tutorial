import React, { useContext } from 'react'
import ColorContext from '../contexts/color'

/**
 * #1 
 * 색상을 props로 받아오는 것이 아니라 ColorContext 안에 들어있는 Consumer 컴포넌트를 통해 색상을 조회
 */
// const ColorBox = () => {
//   return (
//    <ColorContext.Consumer>
//     {value => (
//       <div 
//         style={{
//           width: '64px',
//           height: '64px',
//           background: value.color
//         }}
//       />
//     )}   
//    </ColorContext.Consumer> 
//   )
// }


/**
 * #2 ColoContext.Consumer를 ColorConsumer로 대체하기
 *  */
// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {value => (
//         <>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: value.state.color
//             }}
//           />
//           <div
//             style={{
//               width: '48px',
//               height: '48px',
//               background: value.state.subcolor
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   )
// }

/**
 * #2-1 객체 비구조화 할당을 사용하여 value 조회하는 것 생략하기
 */
// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {({state}) => (
//         <>
//           <div 
//             style={{
//               width:'64px',
//               height: '64px',
//               background: state.color
//             }}
//           />
//           <div
//             style={{
//               width: '48px',
//               height: '48px',
//               background: state.subcolor
//             }}
//           />
//         </>
//       )}
//     </ColorConsumer>
//   )
// }

/**
 * #3 useContext Hook 사용하여 함수형 컴포넌트에서 Context 사용하기
 * 이전보다 훨씬 간결해졌지요? 만약 children에 함수를 전달하는 Render Props 패턴이 불편하다면, useContext Hook을 사용하여 훨씬 편하게 Context 값을 조회할 수 있습니다.
 * 그러나 Hook은 함수형 컴포넌트에서만 사용할 수 있다는 점에 주의하세요. 클래스형 컴포넌트에서는 Hook을 사용할 수 없습니다.
 */
const ColorBox = () => {
  const { state } = useContext(ColorContext)
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}
      />
      <div
        style={{
          width: '48px',
          height: '48px',
          background: state.subcolor
        }}
      />
    </>
  )
}

export default ColorBox
