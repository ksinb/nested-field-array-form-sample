import { FormProvider } from 'react-hook-form';
import { CountryList } from './CountryList';
import { useAppForm } from '~/hooks/useAppForm';

export const AppForm = () => {
  const methods = useAppForm();

  return (
    <FormProvider {...methods}>
      <form
        className="w-full p-4 flex flex-col gap-y-4"
        onSubmit={methods.handleSubmit((data) => console.log(data))}
      >
        <CountryList />
        <button type="submit" className="w-48 bg-red-500 text-white">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
