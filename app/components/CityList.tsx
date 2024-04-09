import { useCityList } from '~/hooks/useCityList';

type Param = {
  countryIndex: number;
  prefectureIndex: number;
};

export const CityList = (param: Param) => {
  const { countryIndex, prefectureIndex } = param;

  const { cities, appendCity, register } = useCityList({
    countryIndex,
    prefectureIndex,
  });

  return (
    <div className="flex flex-col gap-y-2 p-2">
      {cities.map((city, cityIndex) => (
        <div className="flex bg-purple-200" key={city.id}>
          <label className="p-2">
            city:
            <input
              className="border p-2"
              {...register(
                `countries.${countryIndex}.prefectures.${prefectureIndex}.cities.${cityIndex}.name`
              )}
            />
          </label>
        </div>
      ))}

      <button
        type="button"
        className="w-48 bg-purple-500 text-white"
        onClick={appendCity}
      >
        + City
      </button>
    </div>
  );
};
