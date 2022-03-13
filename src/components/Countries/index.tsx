import React, { forwardRef, useEffect } from 'react';
import BottomSheet from 'react-native-gesture-bottom-sheet';

import { useCountry } from '~/hooks/country';

import * as Sty from './styles';

export type CountryProps = {
  flag: string;
  info: string;
};

type ResponseProps = {
  flags: {
    png: string;
  };
  callingCodes: string[];
  alpha2Code: string;
};

export const Coutries = forwardRef((props, ref) => {
  const { countries, selectedCountry, handleSetCountry, setAllCountries } =
    useCountry();

  useEffect(() => {
    fetch('https://restcountries.com/v2/all').then(response =>
      response.json().then(data => {
        const countryFiltred = data.map((item: ResponseProps) => {
          return {
            flag: item.flags.png,
            info: `${item.alpha2Code} +${item.callingCodes[0]}`,
          };
        });

        setAllCountries(countryFiltred);
      }),
    );

    handleSetCountry({
      flag: 'https://flagcdn.com/w320/us.png',
      info: 'US +1',
    });
  }, []);

  return (
    <BottomSheet hasDraggableIcon ref={ref} height={500}>
      <Sty.Container>
        {countries.map((country: CountryProps) => (
          <Sty.ButtonCountry
            key={country.info}
            onPress={() => {
              handleSetCountry(country);
              ref.current.close();
            }}
            style={
              country.info === selectedCountry.info
                ? { backgroundColor: '#c4c4c4' }
                : null
            }
          >
            <Sty.Item key={country.info}>
              <Sty.ImageCountry
                source={{ uri: country.flag }}
                resizeMode="contain"
              />

              <Sty.InfoCountry>{country.info}</Sty.InfoCountry>
            </Sty.Item>
          </Sty.ButtonCountry>
        ))}
      </Sty.Container>
    </BottomSheet>
  );
});
