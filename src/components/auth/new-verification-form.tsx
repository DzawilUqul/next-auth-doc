"use client";

import React, { useCallback,useEffect } from 'react'
import CardWrapper from '@/components/auth/card-wrapper';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

const NewVerificationForm = () => {
    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const onSubmit = useCallback(() => {
      console.log(token);
    }, [token])
  return (
    <CardWrapper
      headerLabel='Confirmign your verification'
      backButtonLabel='Back to login'
      backbuttonHref='/auth/login'
    >
      <div className='flex items-center w-full justify-center'>
        <BeatLoader color='#000' />
      </div>

    </CardWrapper>
  )
}

export default NewVerificationForm