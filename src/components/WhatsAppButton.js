import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton({ handleOpen }) {
  return (
    <div className={styles.root} onClick={handleOpen}>
      <FaWhatsapp />
    </div>
  )
}
