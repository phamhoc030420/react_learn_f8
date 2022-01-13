import clsx from 'clsx'
import styles from './button.module.scss'

function ButtonBtn({ primary, disable }) {
    const classes = clsx(styles.btn, {
        'd-flex': true,
        [styles.primary]: primary,
        [styles.disable]: disable
    })
    return (
        <>

            <button className={classes}>CLick Me</button>


        </>
    )
}
export default ButtonBtn;