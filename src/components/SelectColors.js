import React, { Component } from 'react';
// import { ColorConsumer } from '../contexts/color'
import ColorContext from '../contexts/color'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]

/**
 * #1
 * 색상표 보여주기
 */
// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요!</h2>
//       <div style={{ display: 'flex' }}>
//         {colors.map(color => (
//           <div
//             key={color}
//             style={{
//               background: color,
//               width: '24px',
//               height: '24px',
//               cursor: 'pointer'
//             }}
//           />
//         ))}
//       </div>
//       <hr />
//     </div>
//   )
// }

/**
 * #2
 * 마우스 왼쪽 클릭 > 큰 사각형 색상 변경하기
 * 마우스 오른쪽 클릭 > 작은 사각형 색상 변경하기
 */
// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요?!</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: 'flex' }}>
//             {colors.map(color => (
//               <div
//                 key={color}
//                 style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
//                 onClick={()=> actions.setColor(color)}
//                 onContextMenu={e => {
//                   e.preventDefault() // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 방지
//                   actions.setSubcolor(color)
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   )
// }

/**
 * #3 클래스 컴포넌트로 변환하기
 */
class SelectColors extends Component {
  static contextType = ColorContext
  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.! class component</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default SelectColors
