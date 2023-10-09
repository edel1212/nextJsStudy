import { useNavigation } from "next/navigation";

export default function Page() {
  const navigation = useNavigation();
  console.log(navigation);
  return <div>page</div>;
}
