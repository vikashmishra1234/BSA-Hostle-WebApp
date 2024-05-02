import Loader from 'react-js-loader'
export const Loading = ()=>{
    return <div style={{position:'fixed',top:'50%',left:"45%",padding:'20px',background:'black'}} >

  <Loader type="spinner-circle" bgColor={'white'} />
 <span style={{color:'white'}}>Please wait....</span> 
    </div>
}