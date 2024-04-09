import { PrefectureList } from './PrefectureList';
import { useCountryList } from '~/hooks/useCountryList';

export const CountryList = () => {
  const { countries, appendCountry, register } = useCountryList();

  return (
    <div className="flex flex-col gap-y-2 p-2">
      {countries.map((country, countryIndex) => (
        <div className="flex bg-blue-200" key={country.id}>
          <label className="p-2">
            country:
            <input
              className="border p-2"
              {...register(`countries.${countryIndex}.name`)}
            />
          </label>

          <PrefectureList countryIndex={countryIndex} />
        </div>
      ))}

      <button
        type="button"
        className="w-48 bg-blue-500 text-white"
        onClick={appendCountry}
      >
        + Country
      </button>
    </div>
  );
};
