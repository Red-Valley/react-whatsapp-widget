import React from 'react'
import App from './components/App'
import WhatsAppButton from './components/WhatsAppButton'
import styles from './index.module.css'

export default function WhatsAppWidget({
  textReplyTime = 'Typically replies within a day',
  message = `Hello! 👋🏼 \n\nWhat can we do for you?`,
  companyName = 'Support',
  sendButton = 'Send',
  placeholder = 'Type a message',
  phoneNumber,
  handleOpen,
  isOpen
}) {
  return (
    <div className={styles.root}>
      <App
        textReplyTime={textReplyTime}
        companyName={companyName}
        phoneNumber={phoneNumber}
        sendButton={sendButton}
        placeholder={placeholder}
        message={message}
        handleOpen={handleOpen}
        isOpen={isOpen}
      />
      <WhatsAppButton handleOpen={handleOpen} />
    </div>
  )
}
