import { Camera } from 'expo-camera';
import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import barcode from '~/assets/icons/barcode.png';
import close from '~/assets/icons/close.png';
import info from '~/assets/icons/info.png';
import phone from '~/assets/icons/phone.png';
import focus from '~/assets/images/focus.png';

import * as Sty from './styles';

export function Scan() {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { Colors, Sizes } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function handleScanCode(data: string) {
    console.log(data);
  }

  return (
    <Sty.Container>
      <Camera
        style={{ flex: 1 }}
        type={type}
        onBarCodeScanned={({ data }) => handleScanCode(data)}
      >
        <Sty.ContainerHeader>
          <Sty.ButtonClose>
            <Sty.ImageClose
              source={close}
              style={{ tintColor: Colors.WHITE }}
            />
          </Sty.ButtonClose>

          <Sty.TextScreen>Scan for payment</Sty.TextScreen>

          <Sty.ButtonInfo>
            <Sty.ImageInfo source={info} style={{ tintColor: Colors.WHITE }} />
          </Sty.ButtonInfo>
        </Sty.ContainerHeader>

        <Sty.ContainerScan>
          <Sty.ImageScan source={focus} resizeMode="stretch" />
        </Sty.ContainerScan>

        <Sty.ContainerPayments>
          <Sty.TextPaymentsSession>
            Another payment methods
          </Sty.TextPaymentsSession>

          <Sty.ContainerButtonsPayments>
            <Sty.ButtonMethodsPayment>
              <Sty.ContainerButtonsIcons
                style={{ backgroundColor: Colors.LIGHT_PURPLE }}
              >
                <Sty.ImagePayments
                  source={phone}
                  resizeMode="cover"
                  style={{ tintColor: Colors.PURPLE }}
                />
              </Sty.ContainerButtonsIcons>

              <Sty.TextPayments>Phone number</Sty.TextPayments>
            </Sty.ButtonMethodsPayment>

            <Sty.ButtonMethodsPayment>
              <Sty.ContainerButtonsIcons
                style={{
                  backgroundColor: Colors.LIGHT_GREEN,
                  marginLeft: Sizes.PADDING_10 * 4,
                }}
              >
                <Sty.ImagePayments
                  source={barcode}
                  resizeMode="cover"
                  style={{ tintColor: Colors.GREEN }}
                />
              </Sty.ContainerButtonsIcons>

              <Sty.TextPayments>Barcode</Sty.TextPayments>
            </Sty.ButtonMethodsPayment>
          </Sty.ContainerButtonsPayments>
        </Sty.ContainerPayments>
      </Camera>
    </Sty.Container>
  );
}
