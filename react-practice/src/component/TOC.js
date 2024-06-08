import React, {Component} from 'react';

// 함수형 Component
// function TOC(){
//     return(
//       <nav>
//         <ul>
//           <li><a href="1.html"></a></li>
//           <li><a href="2.html"></a></li>
//           <li><a href="3.html"></a></li>
//         </ul>
//       </nav>
//     );
//   }


// class형 Component
class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i = i+1;
        }
        return(
            <nav>
              <ul>
                {lists}
              </ul>
            </nav>
          );
    }
  }

export default TOC;