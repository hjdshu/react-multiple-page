import React from 'react';
import ThemeContext from '../reduce';

interface IProps {
  count: number
}

interface IState {
  count2: number
}

export default function (props: IProps) {

  // const {state, dispatch} = useContext(ThemeContext)

  const { count } = props

  console.log(count)

  return (
    <div>
      <h2>this is c3</h2>
      count: {count}
      <br/>
    </div>
  )
}



// export default class C3 extends React.Component<IProps, IState>{

//   constructor (props: Readonly<IProps>) {
//     super(props);
//   }

//   shouldComponentUpdate (nextProps: IProps) {
//     if (nextProps.count != this.props.count) return true
//     return false
//   }

//   render () {
//     const count = this.props.count
//     console.log(count)
//     return (
//       <div>
//         <h2>this is c3</h2>
//         count: {count};
//         {/* <button onClick={() => {
//           this.addCount2()
//         }}>add count2</button>
//         count2: {count2} */}
//         <br/>
//       </div>
//     )
//   }
// }