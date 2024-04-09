import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormValues } from '~/types';

type Param = {
  countryIndex: number;
};

export const usePrefectureList = (param: Param) => {
  const { countryIndex } = param;

  const { control, register } = useFormContext<FormValues>();

  const { fields: prefectures, append } = useFieldArray({
    control,
    name: `countries.${countryIndex}.prefectures`,
  });

  /**
   * 都道府県の追加
   */
  const appendPrefecture = useCallback(() => {
    append({ id: '', name: '', cities: [] });
  }, [append]);

  return { prefectures, appendPrefecture, register };
};
