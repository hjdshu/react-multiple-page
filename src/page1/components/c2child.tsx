import React from 'react';

interface IProps {
  count: number
}


// export default function (props: IProps) {

//   const { count } = props

//   console.log(count)

//   return (
//     <div>
//       <h3>this is C2's child</h3>
//       count: {count}
//       <br/>
//     </div>
//   )
// }



export default class C3 extends React.Component<IProps>{

  constructor (props: Readonly<IProps>) {
    super(props);
  }

  render () {
    const count = this.props.count
    console.log(count)
    return (
      <div>
        <h3>this is C2's child</h3>
        count: {count}
        <br/>
      </div>
    )
  }
}