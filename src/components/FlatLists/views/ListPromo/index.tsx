import React, { useCallback } from 'react';
import { Text } from 'react-native';

import promoBanner from '~/assets/images/promo-banner.png';
import { promoData } from '~/screens/Home/mock';

import * as Sty from './styles';

export function ListPromo() {
  const renderPromo = useCallback(({ item }) => {
    return (
      <Sty.ButtonPromo>
        <Sty.ContainerPromo>
          <Sty.ImagePromo source={promoBanner} resizeMode="cover" />
        </Sty.ContainerPromo>

        <Sty.ContainerInfo>
          <Sty.TitlePromo>{item.title}</Sty.TitlePromo>
          <Sty.DescriptionPromo>{item.description}</Sty.DescriptionPromo>
        </Sty.ContainerInfo>
      </Sty.ButtonPromo>
    );
  }, []);

  return (
    <Sty.FlatListPromo
      data={promoData}
      extraData={promoData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderPromo}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />
  );
}
