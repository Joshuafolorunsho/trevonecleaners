import React from 'react';
import { useForm, Control } from 'react-hook-form';
import { Button, TextAreaField } from '~/components';
import { InputField } from '~/components/InputField';

type FormValues = {
  fullName: string;
  phoneNum: number;
  email: string;
  message: string;
};

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);

    // reset();
  };
  return (
    <>
      <section className="bg-hero-contact bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Contact Us
            </h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-8">
        <div className="rounded-3xl bg-white p-8 shadow-lg shadow-gray-300 sm:rounded-[40px] md:flex md:space-x-14 lg:items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-semibold text-gray-950">Contact Us Today</h2>
            <p className="mt-1 text-xl text-gray-850 sm:text-2xl">
              We will give you call to follow up
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-full">
              <div className="flex-1">
                <InputField
                  type={'text'}
                  placeholder="Full name"
                  registration={{ ...register('fullName') }}
                  hasError={errors.fullName}
                  errorMessage={errors.fullName?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
                <InputField
                  type={'number'}
                  placeholder="Phone Number"
                  registration={{ ...register('phoneNum') }}
                  hasError={errors.phoneNum}
                  errorMessage={errors.phoneNum?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
                <InputField
                  type={'email'}
                  placeholder="Email Address"
                  registration={{ ...register('email') }}
                  hasError={errors.email}
                  errorMessage={errors.email?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
              </div>
              <TextAreaField
                id="message"
                placeholder="message"
                registration={{ ...register('message') }}
                hasError={errors.message}
                isRequired
                className="border-gray-150 text-gray-950 placeholder-gray-150"
              />
              <div className="mb-2 mt-4 flex justify-center">
                <Button type="submit" className="w-full">
                  Proceed to confirm booking
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 flex-1 md:mt-0">
            <img src="/assets/contact/map.png" className="h-full w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
