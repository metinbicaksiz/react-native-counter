import {Button, Text, TouchableOpacity, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from "@/redux/actions";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

  return (
      <View className="flex flex-col w-screen items-start h-screen p-2 mt-16 bg-gray-300">
        <View className="w-screen">
            <Text className="text-black text-6xl font-bold m-auto mt-10">Counter</Text>
            <Text className="text-red-600 font-bold text-6xl my-10 m-auto">
                {count}
            </Text>
        </View>
          <View className="flex flex-row">
              <TouchableOpacity className="bg-amber-300 rounded-lg my-2 w-3/6" >
                <Button title="Increment" onPress={() => dispatch(increment())}/>
              </TouchableOpacity>
              <TouchableOpacity className="bg-amber-300 rounded-lg my-2 ml-1 w-3/6" >
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
              </TouchableOpacity>
          </View>
          <View className="w-screen">
              <TouchableOpacity className="bg-red-700 text-white rounded-lg mt-4" >
                <Button title="Reset" onPress={() => dispatch(reset())} />
              </TouchableOpacity>
          </View>
      </View>
  );
}
