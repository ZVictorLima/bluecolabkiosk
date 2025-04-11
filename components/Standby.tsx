import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import BCLogo from '../assets/images/icons/Blue-CoLab-500-blue.png';

// Current Time Hook for Standby Screen
const CurrentTime = () => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    },[]);
    return (
        <Text className="text-white text-3xl">
            {time.toLocaleTimeString()}
        </Text>
    );
};


export default function Standby({ onStart, fadeOut }: { onStart: () => void , fadeOut: boolean }) {
    return (
        <TouchableOpacity
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 
            transition-all duration-800 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onPress={onStart}
            activeOpacity={1} // Prevent flickering
        >
            <Image src={BCLogo} className="mb-4 w-32 h-32" resizeMode="contain" />

            <Text className="text-white text-4xl font-bold mb-2 text-center">
                What do you know about water?
            </Text>

            <Text className="text-white text-2xl animate-pulse text-center">
                Tap to Start
            </Text>

            {/* Current Time in Bottom Right */}
            <View className="absolute bottom-4 right-4">
                <CurrentTime />
                <Text className="text-white">v2025.4.1.1034</Text>
            </View>
        </TouchableOpacity>
    );
}