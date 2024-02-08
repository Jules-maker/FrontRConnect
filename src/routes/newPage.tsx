import ButtonComponent from "../components/ButtonComponent";
import { setVisitedWebSite } from "../utils/vistiedWebSite";


const NewPage = () => {
    return (
        <div>
        <h1>New</h1>
        <ButtonComponent label="Visite" handleClick={() => {
            console.log('Visite');
            setVisitedWebSite();
        }} />
        <ButtonComponent label="Retour" handleClick={() => {
            console.log('Retour');
            window.history.back();
        }} />
        </div>
    );
    }

export default NewPage;