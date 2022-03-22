import bill from '~/assets/icons/bill.png';
import games from '~/assets/icons/games.png';
import internet from '~/assets/icons/internet.png';
import more from '~/assets/icons/more.png';
import phone from '~/assets/icons/phone.png';
import reload from '~/assets/icons/reload.png';
import send from '~/assets/icons/send.png';
import wallet from '~/assets/icons/wallet.png';
import { FeaturesDTO } from '~/dtos/features';
import light from '~/themes/light';

export const featureData: FeaturesDTO[] = [
  {
    id: 1,
    icon: reload,
    iconColor: light.Colors.PURPLE,
    backgroundColor: light.Colors.LIGHT_PURPLE,
    label: 'Top up',
  },
  {
    id: 2,
    icon: send,
    iconColor: light.Colors.YELLOW,
    backgroundColor: light.Colors.LIGHT_YELLOW,
    label: 'Transfer',
  },
  {
    id: 3,
    icon: internet,
    iconColor: light.Colors.GREEN,
    backgroundColor: light.Colors.LIGHT_GREEN,
    label: 'Internet',
  },
  {
    id: 4,
    icon: wallet,
    iconColor: light.Colors.RED,
    backgroundColor: light.Colors.LIGHT_RED,
    label: 'Wallet',
  },
  {
    id: 5,
    icon: bill,
    iconColor: light.Colors.YELLOW,
    backgroundColor: light.Colors.LIGHT_YELLOW,
    label: 'Bill',
  },
  {
    id: 6,
    icon: games,
    iconColor: light.Colors.GREEN,
    backgroundColor: light.Colors.LIGHT_GREEN,
    label: 'Games',
  },
  {
    id: 7,
    icon: phone,
    iconColor: light.Colors.RED,
    backgroundColor: light.Colors.LIGHT_RED,
    label: 'Mobile prepaid',
  },
  {
    id: 8,
    icon: more,
    iconColor: light.Colors.PURPLE,
    backgroundColor: light.Colors.LIGHT_PURPLE,
    label: 'More',
  },
];

export const promoData = [
  {
    id: 1,
    title: 'Promo 1',
    description: 'This is special promo one',
  },
  {
    id: 2,
    title: 'Promo 2',
    description: 'This is special promo two',
  },
  {
    id: 3,
    title: 'Promo 3',
    description: 'This is special promo three',
  },
  {
    id: 4,
    title: 'Promo 4',
    description: 'This is special promo four',
  },
];
