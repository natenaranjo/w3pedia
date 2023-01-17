import React from 'react';
import Head from 'next/head';

import Form from '../components/Form/Form';
import { FormProvider } from '../context/FormContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>W3pedia</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>


      <main className='flex flex-col lg:flex-row justify-center gap-8 p-2'>
        <section className='w-full border-2 border-solid rounded-xl border-white hidden xl:block'>
          <div className=''>
            <h1>Just a placeholder!</h1>
          </div>
        </section>
        <section  className='w-full border-2 border-solid rounded-xl border-white'>
        <div className=''>
            <FormProvider>
              <Form />
            </FormProvider>
          </div>
        </section>
      </main>
    </>
  )
}
