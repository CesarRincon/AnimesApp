import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Anime } from '../interfaces/animeInterface';
import { StyleSheet } from 'react-native'
import { AnimesRecomendations } from '../interfaces/animeRecomended';
import { useNavigation } from '@react-navigation/native';



interface Props {
    anime?: Anime
    animesRecomendados?: AnimesRecomendations
    height?: number
    width?: number
}

export const AnimePoster = ({ anime, height = 420, width = 300, animesRecomendados }: Props) => {

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
            //@ts-ignore
            onPress={() => navigation.navigate('Detail', anime ? anime : animesRecomendados?.entry[0])}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginRight: 8
            }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: anime ? anime.images.jpg.image_url : animesRecomendados?.entry[0].images.jpg.image_url
                    }}
                />
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 20
    }
});
