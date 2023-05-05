import React from 'react';
import { SelectField, Title } from '~/components';
import { InputField } from '~/components/InputField';
import { useForm, SubmitHandler, Control } from 'react-hook-form';
import { error } from 'console';
import { InputDateField } from '~/components/InputDateField';

type FormValues = {
  fullName: string;
  phoneNum: number;
  email: string;
  serviceType: 'string';
};

const Index = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <section className="bg-hero-book bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Book us now
            </h1>
          </div>
        </div>
      </section>
      <section className=" bg-primary-300/90 text-center">
        <p className="container mx-auto flex flex-col  items-center justify-center gap-3 py-5 text-white  sm:flex-row md:py-8">
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.6663 12.4L21.683 11.3667L16.9997 0.333333L12.3163 11.3833L0.333008 12.4L9.43301 20.2833L6.69967 32L16.9997 25.7833L27.2997 32L24.583 20.2833L33.6663 12.4ZM16.9997 22.6667L10.733 26.45L12.3997 19.3167L6.86634 14.5167L14.1663 13.8833L16.9997 7.16667L19.8497 13.9L27.1497 14.5333L21.6163 19.3333L23.283 26.4667L16.9997 22.6667Z"
              fill="#E4F2F6"
            />
          </svg>

          <span className="text-lg md:text-2xl">
            Enjoy 12% discount when booking from our website
          </span>
        </p>
      </section>
      <section className="container mx-auto my-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center space-x-3">
            <svg
              className="h-6 w-6 sm:h-10 sm:w-10"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 33H25.5"
                stroke="#4EABC2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 25V4.2C1.5 3.35131 1.83714 2.53737 2.43726 1.93726C3.03737 1.33714 3.85131 1 4.7 1H30.3C31.1487 1 31.9626 1.33714 32.5627 1.93726C33.1629 2.53737 33.5 3.35131 33.5 4.2V25C33.5 25.8487 33.1629 26.6626 32.5627 27.2627C31.9626 27.8629 31.1487 28.2 30.3 28.2H4.7C3.85131 28.2 3.03737 27.8629 2.43726 27.2627C1.83714 26.6626 1.5 25.8487 1.5 25Z"
                fill="#4EABC2"
                stroke="#4EABC2"
                strokeWidth="1.5"
              />
              <path
                d="M12.6992 14.6L15.8992 17.8L22.2992 11.4"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-semibold sm:text-2xl">Ready to book our services?</span>
          </div>
          <p className="mt-2 text-center sm:text-lg">
            It's easy! Simply fill out the form below with your contact information and the details
            of the services you need. Our team will be in touch with you promptly to confirm your
            booking and answer any questions you may have.
          </p>
        </div>
        <section className="container mx-auto my-7 flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl justify-between md:flex"
          >
            <div className="">
              <h3>Personal Details</h3>
              <InputField
                type={'text'}
                placeholder="Full name"
                registration={{ ...register('fullName') }}
                hasError={errors.fullName}
                errorMessage={errors.fullName?.message}
                isRequired
                className="my-3"
              />
              <InputField
                type={'number'}
                placeholder="Phone Number"
                registration={{ ...register('phoneNum') }}
                hasError={errors.phoneNum}
                errorMessage={errors.phoneNum?.message}
                isRequired
                className="my-3"
              />
              <InputField
                type={'email'}
                placeholder="Email Address"
                registration={{ ...register('email') }}
                hasError={errors.email}
                errorMessage={errors.email?.message}
                isRequired
                className="my-3"
              />
            </div>
            <div className="">
              <h3>Select date, time & services</h3>
              <SelectField
                name="serviceType"
                placeholder="serviceType"
                control={control as unknown as Control}
                arr={[]}
                hasError={errors.serviceType}
              />
              <InputDateField name="date" />
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Index;
