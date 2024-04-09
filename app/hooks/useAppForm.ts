import { useForm } from 'react-hook-form';
import { FormValues } from '~/types';

export const useAppForm = () => {
  const formMethods = useForm<FormValues>();

  return formMethods;
};
