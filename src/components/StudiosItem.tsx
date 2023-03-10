import { Text, View, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Producer } from '../interfaces/animeFull';
import { useAnimeStudios } from '../hooks/useAnimeStudios';

interface Props {
    studios: Producer
}

export const StudiosItem = ({ studios }: Props) => {


    const { animeStudios, isLoading } = useAnimeStudios(studios.mal_id)

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color={'red'} size={90} />
            </View>

        )
    }


    return (
        <View style={styles.container}>
            <Image
                style={{ width: '30%', height: 80, borderRadius: 10 }}
                source={{
                    uri: animeStudios?.images.jpg.image_url
                }}
            />
            <View style={{ width: '60%', height: '90%', marginVertical: 10, gap: 5 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{animeStudios?.titles[0].title}</Text>

                <Text style={{ fontSize: 15, color: 'black' }}>{animeStudios?.about}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        gap: 15,
        padding: 8,
        flexDirection: 'row',
        width: '100%',
        height: 300,
        borderRadius: 10,

    },
    info: {
        marginLeft: 10
    }
});
