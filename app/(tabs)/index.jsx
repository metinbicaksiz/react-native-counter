import {Button, Switch, Text, TouchableOpacity, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from "@/redux/actions";
import {useColorScheme} from "nativewind";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);
    const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
      <View className="flex flex-col w-screen items-center h-screen p-2 mt-16">
        <View className="flex-row justify-center items-center space-x-2">
            <Text className="text-xl dark:text-white mr-2">Toggle Theme</Text>
            <Switch value={colorScheme==='dark'} onChange={toggleColorScheme}></Switch>
        </View>
        <View className="w-screen flex flex-col justify-center items-center space-x-2">
            <Text className="text-black text-6xl font-bold m-auto mt-10 dark:text-white">Counter</Text>
            <Text className="text-red-600 font-bold text-6xl my-10 m-auto">
                {count}
            </Text>
        </View>
          <View className="flex flex-row">
              <TouchableOpacity className="bg-orange-400 rounded-lg my-2 w-3/6" >
                <Button title="Increment" onPress={() => dispatch(increment())}/>
              </TouchableOpacity>
              <TouchableOpacity className="bg-orange-400 rounded-lg my-2 ml-1 w-3/6" >
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
              </TouchableOpacity>
          </View>
          <View className="w-screen">
              <TouchableOpacity className="bg-red-700 dark:bg-white text-white rounded-lg mt-4" >
                <Button title="Reset" onPress={() => dispatch(reset())} />
              </TouchableOpacity>
          </View>
      </View>
  );
}
