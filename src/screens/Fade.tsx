import { Animated, Button, Text, View } from 'react-native';
import { UseFade } from '../hooks/useFade';


export const Fade = () => {

    const { opacity, fadeIn, fadeOut } = UseFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Animated.View style={{
                backgroundColor: '#004F6A',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity
            }} />

            <Button
                title='FadeIn'
                onPress={fadeIn}
            />
            <Button
                title='FadeIn'
                onPress={fadeOut}
            />

        </View>
    )
}
