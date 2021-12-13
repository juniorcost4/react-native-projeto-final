import React, { useEffect, useState, useRef } from 'react';
import { Image, ScrollView, Dimensions, View } from 'react-native';

const { width: larguraTela } = Dimensions.get('window');
const width = larguraTela - 20;
const height = width / 2;

import { Container, ScrollPointer } from './styles'; 

const Carroussel = () => {
    const [activeImage, setActiveImage] = useState(0);

    const [images, setImages] = useState([]);

    const ScrollViewREf = useRef(null);
    const onChange = event => {
      const slide = Math.ceil(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      );
  
      if (slide !== activeImage) {
        setActiveImage(slide);
      }
    };

    useEffect(() => {
        const links = [
            "https://static.paodeacucar.com/static/pa/1638992395842-desk-20211208-desk-carrossel-natal-pack.jpg?im=Resize,width=1600",
            "https://static.paodeacucar.com/static/pa/1638992395842-desk-20211208-desk-carrossel-natal-pack.jpg?im=Resize,width=1600",
            "https://static.paodeacucar.com/static/pa/1638992395842-desk-20211208-desk-carrossel-natal-pack.jpg?im=Resize,width=1600",
            "https://static.paodeacucar.com/static/pa/1638992395842-desk-20211208-desk-carrossel-natal-pack.jpg?im=Resize,width=1600"
        ];

        setImages(links);
    }, []);

    useEffect(() => {
        const $setInterval = setInterval(() => {
          const p = (activeImage + 1) % images.length;
          ScrollViewREf.current?.scrollTo({ x: p * width, y: 0, animated: true });
        }, 3000);
        return () => {
          clearInterval($setInterval);
        };
      }, [activeImage, images]);

    return (
        <Container style={{ width, height }}>
            <ScrollView
            ref={ScrollViewREf}
            pagingEnabled
            onScroll={onChange}
            scrollEventThrottle={15}
            showsHorizontalScrollIndicator={false}
            horizontal
            decelerationRate="fast"
            style={{ width, height }}
            contentOffset={{ x: 1000, y: 1000 }}
            >
            {images.map((imageLink, index) => (
                <Image
                key={index}
                source={{ uri: imageLink }}
                style={{
                    width,
                    maxHeight: height,
                    resizeMode: 'cover',
                    borderRadius: 20,
                }}
                />
            ))}
            </ScrollView>
            <View
            style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
            }}
            >
            {images.map((i, k) => (
                <ScrollPointer
                key={`ScrollPointer-${k}`}
                isFocused={k === activeImage}
                >
                ⬤
                </ScrollPointer>
            ))}
            </View>
        </Container>
    );
}

export default Carroussel;