import {Parallax} from 'react-parallax';
import spaceStation from '../assets/image2.jpg'
const SecondComponent = () => (
    <Parallax className='image' 
        bgImage={spaceStation}
        strength={800}>
        <div className='content'>
            <h1>THAT’S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND.</h1>
        </div>
    </Parallax>
);

export default SecondComponent
