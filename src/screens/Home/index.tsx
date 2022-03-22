import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { ListFeature } from '~/components/FlatLists/views/ListFeature';
import { ListPromo } from '~/components/FlatLists/views/ListPromo';

import banner from '~/assets/images/banner.png';

import * as Sty from './styles';

export function Home() {
  return (
    <Sty.Container showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#fff" />
      <Sty.ContainerHeader>
        <Sty.TextTitle>Hello!</Sty.TextTitle>
        <Sty.TextName>Thiago Lins</Sty.TextName>
      </Sty.ContainerHeader>

      <Sty.ContainerBanner>
        <Sty.Banner source={banner} resizeMode="cover" />
      </Sty.ContainerBanner>

      <Sty.ContainerFeature>
        <Sty.TextSession>Feature</Sty.TextSession>

        <ListFeature />
      </Sty.ContainerFeature>

      <Sty.ContainerPromo>
        <Sty.TextSession>Special Promo</Sty.TextSession>

        <ListPromo />
      </Sty.ContainerPromo>
    </Sty.Container>
  );
}
