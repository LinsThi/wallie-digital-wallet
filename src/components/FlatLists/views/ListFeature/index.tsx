import React, { useCallback } from 'react';

import { featureData } from '~/screens/Home/mock';

import * as Sty from './styles';

export function ListFeature() {
  const renderFeature = useCallback(({ item }) => {
    return (
      <Sty.ButtonFeature>
        <Sty.ContainerIcon style={{ backgroundColor: item.backgroundColor }}>
          <Sty.FeatureIcon
            source={item.icon}
            resizeMode="contain"
            style={{ tintColor: item.iconColor }}
          />
        </Sty.ContainerIcon>

        <Sty.LabelFeature>{item.label}</Sty.LabelFeature>
      </Sty.ButtonFeature>
    );
  }, []);

  return (
    <Sty.FlatListFeature
      data={featureData}
      extraData={featureData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderFeature}
      numColumns={4}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
    />
  );
}
