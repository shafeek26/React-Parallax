import { Parallax } from 'react-parallax';
import space from '../assets/image1.jpg'
const FirstComponent = () => (
    <Parallax className='image' bgImage={space}  strength={800}>
        <div className='content'>
            <h1>THE DREAM IS ALIVE.</h1>
        </div>
    </Parallax>
);

export default FirstComponent