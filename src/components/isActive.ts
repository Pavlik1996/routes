import styles from './Site.module.css'

export const isActiveClass = (value: boolean) => {
    return value ? styles.active : styles.navLikn
}