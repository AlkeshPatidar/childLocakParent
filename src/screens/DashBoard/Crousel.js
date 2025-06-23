import React, { memo } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import IMG from '../../assets/Images';
import { FONTS_FAMILY } from '../../assets/Fonts';
import color, { App_Primary_color } from '../../common/Colors/colors';

const CarouselComponent = ({ data }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.imageContainer}>
                    <Image
                        source={item}
                        style={{ height: 140, width: '100%', borderRadius: 8 }}
                    //  resizeMode='contain'
                    />
                </View>
            </View>
        );
    };

    const renderPagination = () => {
        return (
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            
            />
        );
    };

    return (
        <View style={styles.carouselContainer}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={scale(350)}
                itemWidth={scale(350)}
                autoplay
                loop
                autoplayDelay={1000}
                autoplayInterval={3000}
                onSnapToItem={index => setActiveIndex(index)}
            />
            {renderPagination()}
        </View>
    );
};

export default memo(CarouselComponent);

const styles = StyleSheet.create({
    carouselContainer: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 30
    },
    item: {
        alignSelf: 'center',
        width: '95%'

    },
    imageContainer: {
        borderRadius: moderateScale(12),
        // overflow: 'hidden',
        // width: scale(390),
    },
    imageBackground: {
        // height: '100%',
        // width: '100%',
        // paddingHorizontal: scale(20),
    },
    imageStyle: {
        borderRadius: moderateScale(12),
    },
    itemTitle: {
        color: color.white,
        fontSize: moderateScale(15),
        fontFamily: FONTS_FAMILY.Poppins_Medium,
        lineHeight: verticalScale(22.5),
        paddingTop: verticalScale(10),
    },
    contentContainer: {
        backgroundColor: 'orange',
        padding: 30,
        borderRadius: 10,
        height: 300,
    },
    itemImage: {
        height: verticalScale(179),
        width: scale(169),
        alignSelf: 'center',
    },
    favouriteIcon: {
        alignSelf: 'flex-end',
        bottom: verticalScale(190),
    },
    itemPrice: {
        color: color.white,
        fontSize: moderateScale(15),
        fontFamily: FONTS_FAMILY.Poppins_Medium,
    },
    paginationContainer: {
        paddingVertical: verticalScale(5),
        // bottom: 8
    },
    dotStyle: {
        width: scale(10),
        height: verticalScale(5),
        borderRadius: 40,
        backgroundColor: 'white',
    },
});
