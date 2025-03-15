import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";


const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery } = useMovies();
  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="px-4 mb-2 text-3xl font-bold">MoviesApp</Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />

      {/* Popular */}
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
