import Image from 'next/image'
import styles from '../styles/Aside.module.scss'

const Aside = () => {
    return (
        <aside className={styles.sideNav}>
            <p>Aside</p>
            <Image 
                src="/profile.jpg"
                height={150}
                width={150}
                alt="Peter Rosendahl"
                className={styles.imgcircle}
                />
        </aside>
    )
}

export default Aside;