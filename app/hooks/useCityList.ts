import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormValues } from '~/types';

type Param = {
  countryIndex: number;
  prefectureIndex: number;
};

export const useCityList = (param: Param) => {
  const { countryIndex, prefectureIndex } = param;

  const { control, register } = useFormContext<FormValues>();

  const { fields: cities, append } = useFieldArray({
    control,
    name: `countries.${countryIndex}.prefectures.${prefectureIndex}.cities`,
  });

  /**
   * 市町村の追加
   */
  const appendCity = useCallback(() => {
    append({ id: '', name: '' });
  }, [append]);

  return { cities, appendCity, register };
};
