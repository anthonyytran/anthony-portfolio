import './index.scss';
import AnimatedLetters from '../AnimatedLetters'


const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','M','e']}
                        inx={15}
                    />
                </h1>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
                <p> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </p>
            </div>
        </div>
    );
}

export default About;