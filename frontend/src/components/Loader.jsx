import Loader from 'react-js-loader'
export const Loading = ()=>{
    return <div className='loading' >

  <Loader type="spinner-circle" bgColor={'white'} />
 <span style={{color:'white'}}>Please wait....</span> 
    </div>
}