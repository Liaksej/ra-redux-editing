import { App } from "@/components/App";
import ProviderContainer from "@/redux/ProviderContainer";

export default function Home() {
  return (
    <ProviderContainer>
      <App />
    </ProviderContainer>
  );
}
