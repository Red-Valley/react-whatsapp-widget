import React from 'react'
import styles from './App.module.css'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App(props) {
  const { handleOpen, isOpen } = props
  return (
    <div className={`${styles.root} ${isOpen ? styles.open : styles.close}`}>
      <Header handleOpen={handleOpen} {...props} />
      <ChatSection {...props} />
      <SendButton {...props} />
    </div>
  )
}
