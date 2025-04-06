import React from 'react'
import Info from './info'
import MailForm from './mailform'


const ContactInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 z-10">
         <Info />
          <MailForm />
    </div>
  )
}

export default ContactInfo
