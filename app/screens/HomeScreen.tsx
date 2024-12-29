import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
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
                    <TouchableOpacity className={`flex-row p-3 items-center gap-5 ${borderClass}`} key={index}>
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
         <View className=" bg-red-500 flex-1">
        <Text>Turkey,</Text>
        <Text>Istanbul</Text>
      </View>
     
    </View>
  );
};

export default HomeScreen;

