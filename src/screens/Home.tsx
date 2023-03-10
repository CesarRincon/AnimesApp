import { View, ActivityIndicator, Dimensions, FlatList } from 'react-native'
import { UseAnimes } from '../hooks/useAnimes';
import { AnimePoster } from '../components/AnimePoster';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { useContext, useEffect } from 'react';
import { GradientContext } from '../api/context/GradientContext';

const { width: windowWidth } = Dimensions.get('window')

export const Home = () => {

    const { animes, isLoading, animesTop, animesRecomendations } = UseAnimes();
    const { setMainColors } = useContext(GradientContext)


    const getPosterColors = async (index: number) => {
        const uri = animes[index].images.jpg.image_url
        const { primary = 'green', secondary= 'yellow' } = await getImageColors(uri)
        setMainColors({primary, secondary});
        
    }

    useEffect(() => {
      if (animes.length > 0) {
        getPosterColors(0)
      }
    }, [animes])
    
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color={'red'} size={90} />
            </View>

        )
    }

    return (

        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: 20 }}>

                    <View style={{ height: 440 }}>
                        <Carousel
                            data={animes!}
                            renderItem={({ item }: any) => <AnimePoster anime={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}

                        />
                    </View>

                    <HorizontalSlider title='Animes Top' animes={animesTop} />

                    <HorizontalSlider title='Recomendations' animeRecomended={animesRecomendations} />

                </View>
            </ScrollView>
        </GradientBackground>
    )
}
