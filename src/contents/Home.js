// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component{
    render(){
        return(
            <div className='condiv home'>
                <img src="https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.6435-9/88060065_3557362321002216_4388074623539871744_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1RNSftBWvqKSobEOTliRa3nTH-yEwEznedMf7ITATOVfqoVjuZ746OPvUHGHwkw0LRBgiz8-ZkukDxlIxkSlw&_nc_ohc=DP3MK79-0JkAX9ZClTd&_nc_ht=scontent.fbkk9-2.fna&oh=00_AT8INApD3Lkhbh8GS7cTx-yKFxtu1YUL9__apLenHqwYSw&oe=62058424" alt=''/>
                <ReactTypingEffect text={'SAFETEMBER'} speed={80} eraseDelay={200} className='typingeffect' />
                <Social />
            </div>
        )
    }
}
export default Home;
