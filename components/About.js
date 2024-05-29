import React from 'react'
import Image from 'next/image';
import split from '../public/Images/split.png';


function About() {
    return (
        <section className='About-section'>

            <div className='About-Image'>
                <Image
                    src={split}
                    alt='Map'

                /></div>
            <div className="About-details">
                <header>
                    <h1 className='About-title'>ABOUT ME</h1>
                </header>
                <p>Tech Lead at Hack The Spaces</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minima iste consequuntur quam saepe nam deleniti expedita nostrum maiores deserunt, animi est ad, itaque labore dolore commodi! Soluta deserunt provident itaque voluptatem sit voluptatibus, hic necessitatibus quo debitis, illo fugiat inventore aliquam ab quas iste? Quaerat perferendis ratione porro ipsa!</p>
            </div>
        </section>
    )
}

export default About