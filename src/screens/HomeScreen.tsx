import pins from '../../assets/data/pins';
import { RootTabScreenProps } from '../../types';
import MasonryList from '../components/MasonryList';
export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'Home'>) {
  return <MasonryList pins={pins} />;
}
