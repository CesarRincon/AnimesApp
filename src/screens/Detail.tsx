import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackParams, Navigation } from '../navigation/Navigation';
import { useAnimeDetail } from '../hooks/useAnimeDetail';
import { StudiosItem } from '../components/StudiosItem';


const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

export const Detail = ({ route, navigation }: Props) => {

    const anime = route.params;

    const { isLoading, animeFull } = useAnimeDetail(anime.mal_id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.posterImage}
                    source={{
                        uri: anime.images.jpg.image_url
                    }}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{anime?.title}</Text>
                <Text style={styles.subTitle}>{anime?.title_synonyms}</Text>
                <View style={{ flexDirection: 'row', gap: 2 }}>
                    <Icon name="star-outline" color="grey" size={20} />
                    <Text style={{ color: 'black' }}> {animeFull?.score}</Text>
                    <Text style={{ color: 'black' }}> -   {animeFull?.genres.map(g => g.name).join(', ')}</Text>
                </View>
                <Text>Transmisión: {animeFull?.status}</Text>
                <Text>Episodios: {animeFull?.episodes}</Text>
            </View>

            <View style={styles.containerDescription}>
                <Text style={styles.title}>Sinopsis: </Text>
                <Text style={styles.sinopsis}>{animeFull?.synopsis}</Text>
            </View>
            <View style={{ marginTop: 18, marginBottom: 100 }}>
                <Text style={{ ...styles.title, marginLeft: 20 }}>Studio</Text>
                <FlatList
                    data={animeFull?.studios}
                    keyExtractor={(item) => item.mal_id.toString()}
                    renderItem={(item) => <StudiosItem studios={item.item} />}
                />
            </View>

            <TouchableOpacity
                style={styles.backButtom}
                onPress={() => navigation.pop()}
            >
                <Icon name="arrow-back-outline" color="white" size={60} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', right: 10, top: 500, backgroundColor: 'white', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="stop-circle-outline" color={animeFull?.airing ? 'green' : 'red'} size={35}
                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        overflow: 'hidden',
        height: screenHeight * 0.6,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 12
    },
    posterImage: {
        flex: 1
    },
    infoContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    subTitle: {
        fontSize: 16
    },
    sinopsis: {
        marginTop: 6,
        color: 'black',
        paddingBottom: 25,
        fontSize: 16
    },
    containerDescription: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    backButtom: {
        position: 'absolute',
        top: 10,
        left: 10
    }
});
