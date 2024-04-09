import { usePrefectureList } from '~/hooks/usePrefectureList';
import { CityList } from './CityList';

type Props = {
  countryIndex: number;
};

export const PrefectureList = (props: Props) => {
  const { countryIndex } = props;

  const { prefectures, appendPrefecture, register } = usePrefectureList({
    countryIndex,
  });

  return (
    <div className="flex flex-col gap-y-2 p-2">
      {prefectures.map((prefecture, prefectureIndex) => (
        <div className="flex bg-green-200" key={prefecture.id}>
          <label className="p-2">
            prefecture:
            <input
              className="border p-2"
              {...register(
                `countries.${countryIndex}.prefectures.${prefectureIndex}.name`
              )}
            />
          </label>

          <CityList
            countryIndex={countryIndex}
            prefectureIndex={prefectureIndex}
          />
        </div>
      ))}

      <button
        type="button"
        className="w-48 bg-green-500 text-white"
        onClick={appendPrefecture}
      >
        + Prefecture
      </button>
    </div>
  );
};
