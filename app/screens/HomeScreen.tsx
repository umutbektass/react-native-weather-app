import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../theme";
import { CalendarDaysIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc:number)=>{
    console.log("location: ",loc)
  }
  return (
    <View className="flex-1 flex">
      <View className="mx-4 relative z-50">
        <View
          className="flex-row justify-end items-center rounded-full"
          style={{
            backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
          }}
        >
          {showSearch ? (
            <TextInput
              className="h-10 flex-1 pl-6"
              placeholder="Search city"
              placeholderTextColor={"lightgray"}
            />
          ) : null}
          <TouchableOpacity
            onPress={() => setShowSearch((currentSearch) => !currentSearch)}
            style={{ backgroundColor: theme.bgWhite(0.3) }}
            className="rounded-full p-3 m-1"
          >
            <MagnifyingGlassIcon size={25} color="white" />
          </TouchableOpacity>
        </View>
        {locations.length > 0 && showSearch && (
          <View className="absolute top-20 w-full bg-gray-300 rounded-3xl">
          {
             locations.map((loc, index) => {
                const showBorder = index+1 !==locations.length;
                const borderClass = showBorder ? 'border-b border-gray-500' : ''
               return (
                    <TouchableOpacity 
                      onPress={()=>handleLocation(loc)}
                    className={`flex-row p-3 items-center gap-5 ${borderClass}`} key={index}>
                      <MapPinIcon size={20} color="gray"/>
                      <Text>Turkey,Istanbul</Text>
                    </TouchableOpacity>
                  )
             })
          }
          </View>
        )}
      
      </View>

         {/* forecasting section */}
         <View className="flex flex-1 mx-4 justify-around mb-2">
        <Text className="text-white text-center text-2xl font-bold">Turkey,
        <Text className="text-lg font-semibold text-gray-300">Istanbul</Text>
        </Text>
          <View className="flex-row  justify-center">
            <Image className="w-52 h-52" source={require('../../assets/images/partlycloudy.png')}>
            </Image>
          </View>
          <View >
            <Text className="text-white text-center font-bold text-6xl ml-4">23&#176;</Text>
            <Text className="text-white text-center text-xl tracking-widest">Partly cloud</Text>
          </View>

          {/* Other Status */}
         <View className="flex-row items-center justify-between mx-4">
         <View className="flex-row gap-x-2 items-center">
            <Image className="w-6 h-6" source={require('../../assets/icons/wind.png')}></Image>
            <Text className="text-white text-semibold text-base ">22km</Text>
           </View>
           <View className="flex-row gap-x-2 items-center">
            <Image className="w-6 h-6" source={require('../../assets/icons/wind.png')}></Image>
            <Text className="text-white text-semibold text-base ">23%</Text>
           </View>
           <View className="flex-row gap-x-2 items-center">
            <Image className="w-6 h-6" source={require('../../assets/icons/wind.png')}></Image>
            <Text className="text-white text-semibold text-base ">6:05 AM</Text>
           </View>
           
         </View>
      </View>
        <View className="mb-2 space-y-3">
        <View className="flex-row items-center gap-x-3 mx-5 mb-3 ">
          <CalendarDaysIcon size='22' color='white'/>
          <Text className="text-white">Daily forecast</Text>
        </View>
        <ScrollView
         horizontal 
        contentContainerStyle={{marginInline:15}}
        showsHorizontalScrollIndicator={false}>
          <View className="flex w-24 items-center justify-center gap-y-1 py-3 rounded-3xl mx-1" style={{backgroundColor:theme.bgWhite(0.15)}}>
            <Image className="w-11 h-11" source={require('../../assets/images/heavyrain.png')} />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
          <View className="flex w-24 items-center justify-center gap-y-1 py-3 rounded-3xl mx-1" style={{backgroundColor:theme.bgWhite(0.15)}}>
            <Image className="w-11 h-11" source={require('../../assets/images/heavyrain.png')} />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
          <View className="flex w-24 items-center justify-center gap-y-1 py-3 rounded-3xl mx-1" style={{backgroundColor:theme.bgWhite(0.15)}}>
            <Image className="w-11 h-11" source={require('../../assets/images/heavyrain.png')} />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
          <View className="flex w-24 items-center justify-center gap-y-1 py-3 rounded-3xl mx-1" style={{backgroundColor:theme.bgWhite(0.15)}}>
            <Image className="w-11 h-11" source={require('../../assets/images/heavyrain.png')} />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
          <View className="flex w-24 items-center justify-center gap-y-1 py-3 rounded-3xl mx-1" style={{backgroundColor:theme.bgWhite(0.15)}}>
            <Image className="w-11 h-11" source={require('../../assets/images/heavyrain.png')} />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
        </ScrollView>
        </View>
    </View>
  );
};

export default HomeScreen;

