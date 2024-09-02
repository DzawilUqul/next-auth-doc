import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import React from 'react'
import CardWrapper from '@/components/auth/card-wrapper'

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops? Something went wrong!'
      backbuttonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='text-destructive'/>
      </div>
    </CardWrapper>
  )
}

export default ErrorCard