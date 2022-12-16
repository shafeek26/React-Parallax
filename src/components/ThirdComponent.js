import { Parallax } from 'react-parallax';
import astronout from '../assets/image3.jpg'
const ThirdComponent = () => (
    <Parallax className='image'  bgImage={astronout} strength={800}>
         <div className='content'>
            <h1>FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.</h1>
        </div>
    </Parallax>
);

export default ThirdComponent