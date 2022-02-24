import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import styles from './CheckBox.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const CheckBox = ({checked, children, ...rest}) => {
    return (
    <div className={cx('checkbox', 'active')}>
        <label>
            <input type="checkbox" checked={checked} {...rest} />
            <div className={cx('icon')}>{checked ? <MdCheckBox className={styles.checked} /> : <MdCheckBoxOutlineBlank />}</div>
        </label>
        <span>{children}</span>
    </div>
  )
}
