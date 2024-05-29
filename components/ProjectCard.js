import React from 'react'
import Image from 'next/image';

const ProjectCard = ({ pimg, ptech, pdesc }) => {
    return (
        <div className="Card">
            <div className="imgs">
                <Image
                    src={pimg}
                    alt="Akash Verma"
                    className="dark:invert my-8"
                    //fill={true} // {true} | {false}
                    width={400}
                    height={150}
                    priority
                /></div>
            <span className='Tech'>{ptech}</span>
            <div className="pname card-desc"><h3>{pdesc}</h3></div>
        </div>
    )
}

export default ProjectCard