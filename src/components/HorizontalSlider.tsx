import { FlatList, Text, View } from 'react-native';
import { Anime } from '../interfaces/animeInterface';
import { AnimesRecomendations, AnimesRecomended } from '../interfaces/animeRecomended';
import { AnimePoster } from './AnimePoster';

interface Props {
    title?: string;
    animes?: Anime[]
    animeRecomended?: AnimesRecomendations[]
}

export const HorizontalSlider = ({ title, animes, animeRecomended }: Props) => {

    return (
        <View style={{ height: title ? 260 : 220, paddingLeft: 10 }}>
            {
                title &&
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, color: 'black' }}>{title}</Text>
            }
            {
                animes ?
                    <FlatList
                        data={animes}
                        renderItem={({ item }: any) => (
                            <AnimePoster anime={item} width={140} height={200} />

                        )}
                        keyExtractor={(item) => item.mal_id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    :
                    <FlatList
                        data={animeRecomended}
                        renderItem={({ item }: any) => (
                            <AnimePoster animesRecomendados={item} width={140} height={200} />

                        )}
                        keyExtractor={(item) => item.mal_id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
            }
        </View>
    )
}
