import { Text, View } from "react-native";
import React from 'react';
import { Video } from "expo-av";


export const Sobre = () => (
    <View>

        <Video
            style={{ width: "100%", height: '500px' }}
            source={require('../../assets/video.mp4')}
            // source={{
            //     //uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            //     uri: '/assets/video.mp4',
            // }}
            useNativeControls
            resizeMode="contain"
            isLooping
        />



        <Text>musica: eu sou o samba alexadre pires</Text>

        <Text>Coisa linda, muito prazer
            Hoje você vai ser minha
            Esse corpo me pertence
            Eu vou pegar você
            Coisa linda, muito prazer
            Hoje você vai ser minha
            Esse corpo me pertence
            Eu vou pegar você
            Eu cheguei chegando
            Tô cheio de rima
            Na boca do povo
            Em qualquer esquina
            Não faz isso não neguinha
            Que eu me perco todo
            Meu pandeiro quebra
            Meu cavaco chora
            E eu fico louco
            Louco pra te ver mexer
            E descer até o chão
            Abre a roda pra geral
            Bate na palma da mão
            Já dançaram funk aí
            Agora é a minha vez
            Com surdo, cuíca, tamborim, repique
            Eu vou pegar você
            Eu sou o samba
            Tenho certeza que você vai se amarrar
            Eu sou o samba
            Tenho certeza que você vai se entregar pra mim
            Eu sou o samba
            Tenho certeza que você vai se amarrar
            Eu sou o samba
            Tenho certeza que você vai se entregar pra mim</Text>
    </View>
)

// export default props => {
//     return (
//         <Player
//             playsInline
//             poster="/assets/poster.png"
//             src="https://www.youtube.com/watch?v=672gHdwHEgw"
//         />
//     );
// };