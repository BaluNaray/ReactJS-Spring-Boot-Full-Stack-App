
import axios from './CustomAxiosConfig';
import AuthenticationService from './AuthenticationService';


const OffersDataService = () => {
    let username = AuthenticationService.getLoggedInUser();

    return (

        axios.get(`http://localhost:8080/business-owner/${username}`)
    )


}

export default OffersDataService