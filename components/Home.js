import Image from 'next/image';
import name from '../public/Images/Name.png';


export default function Landing() {
    return (
        <section className='home-container flex flex-col items-center'>
            <div className='video-container'>
                <video

                    controls
                    preload='true'
                    loop
                    muted
                    playsinline
                    autoPlay
                    poster='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb914ab2eb409025a/6494cf0a71e092fafde8e382/Valorant_Deadlock_Homepage_Thumbnail.jpg'
                >
                    <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltee455c2e719bb8b9/6494cf1ef1585c219370578e/Valorant_Deadlock_Homepage_Desktop.mp4" type='video/mp4' />
                </video>
            </div>
            <div className="nameContainer flex flex-col items-center ">
                <h1 className='my-7'>Front-end Web Developer</h1>
                <Image
                    src={name}
                    alt="Akash Verma"
                    className="dark:invert my-8"
                    width={900}
                    height={500}
                    priority
                />
                <button className="btn btn--light my-7">
                    <span className="btn__inner">
                        <span className="btn__slide"></span>
                        <span className="btn__content">Download Resume</span>
                    </span>
                </button>
            </div>

        </section>
    )

}