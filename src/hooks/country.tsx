import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { CountryProps } from '~/components/Countries';

interface CountryProviderProps {
  children: ReactNode;
}

type CountryContextData = {
  countries: CountryProps[];
  selectedCountry: CountryProps;
  setAllCountries: (countries: CountryProps[]) => void;
  handleSetCountry: (country: CountryProps) => void;
};

type ResponseProps = {
  flags: {
    png: string;
  };
  callingCodes: string[];
  alpha2Code: string;
};

const CountryContext = createContext<CountryContextData>(
  {} as CountryContextData,
);

export default function CountryProvider({ children }: CountryProviderProps) {
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [selectedCountry, setSelectedCountry] = useState({} as CountryProps);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all').then(response =>
      response.json().then(data => {
        const countryFiltred = data.map((item: ResponseProps) => {
          return {
            flag: item.flags.png,
            info: `${item.alpha2Code} +${item.callingCodes[0]}`,
          };
        });

        setCountries(countryFiltred);
      }),
    );

    setSelectedCountry({
      flag: 'https://flagcdn.com/w320/us.png',
      info: 'US +1',
    });
  }, []);

  const handleSetCountry = useCallback((country: CountryProps) => {
    setSelectedCountry(country);
  }, []);

  const setAllCountries = useCallback((allCountries: CountryProps[]) => {
    setCountries(allCountries);
  }, []);

  const valueProvider = useMemo(
    () => ({ countries, selectedCountry, setAllCountries, handleSetCountry }),
    [selectedCountry, setAllCountries, handleSetCountry],
  );

  return (
    <CountryContext.Provider value={valueProvider}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error('useCountry must be used in a CountryProvider');
  }

  return context;
}
