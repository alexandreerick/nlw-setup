import { Text, View, ScrollView } from 'react-native';

import HabitDay, { DAY_SIZE } from '../components/HabitDay';
import Header from '../components/Header';
import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

const Home = () => {
  return (
    <View className="bg-background flex-1 px-8 pt-16">
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((day, index) => (
          <Text
            key={`${day}_${index}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE }}
          >
            {day}
          </Text>
        ))}
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map(dates => (
            <HabitDay key={dates.toISOString()}/>
          ))}

          {Array.from({ length: amountOfDaysToFill }).map((_, index) => (
            <HabitDay key={index} isDummy/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;