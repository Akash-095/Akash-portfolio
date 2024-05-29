import React from 'react'
import ProjectCard from './ProjectCard'


function Projects() {
    return (
        <section className='projectSection'>
            <header className='p-header'>
                <h2 className='title-down'><span>Projects</span></h2>
            </header>
            <div className="CardCont">
                <ProjectCard pimg={'/Images/nEON.jpeg'} ptech={'React.js'} pdesc={'Online Storage aenfghafkghgauige gfgkgfjkegifgagfgkagsdkgf'} />
                <ProjectCard pimg={'/Images/nEON.jpeg'} ptech={'React.js'} pdesc={'Online Storage'} />
                <ProjectCard pimg={'/Images/nEON.jpeg'} ptech={'React.js'} pdesc={'Online Storage'} />
            </div>
        </section>
    )
}

export default Projects