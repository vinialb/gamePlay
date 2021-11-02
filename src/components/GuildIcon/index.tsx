import React from "react";
import {Image, View} from "react-native";
import {styles} from "./styles";

const { CDN_IMAGE } = process.env;

import DiscordSvg from '../../assets/discord.svg';

type Props = {
    guildId: string;
    iconId: string | null;
}

export default function GuildIcon({guildId, iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return(
        <View style={styles.container}>
            {
                iconId ?  (
                    <Image
                        style={styles.image}
                        source={{ uri: uri}}
                        resizeMode='contain'
                    />
                ) : (
                    <DiscordSvg
                        width={40}
                        height={40}
                    />
                )
            }
        </View>
    )
}
