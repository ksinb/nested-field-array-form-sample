import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormValues } from '~/types';

export const useCountryList = () => {
  const { control, register } = useFormContext<FormValues>();

  const { fields: countries, append } = useFieldArray({
    control,
    name: 'countries',
  });

  /**
   * 国の追加
   */
  const appendCountry = useCallback(() => {
    append({ id: '', name: '', prefectures: [] });
  }, [append]);

  return { countries, appendCountry, register };
};
