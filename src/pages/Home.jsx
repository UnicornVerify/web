import { useAppContext } from "../context/AppContext";
import OnboardingScreen from "./OnboardingScreen";
import UploadDocument from "./UploadDocument";

const Home = () => {
    const {user} = useAppContext();

    return (
        <div className="mt-10">

            {user ? <UploadDocument/> : <OnboardingScreen/>}
        
        </div>
    )
}

export default Home;