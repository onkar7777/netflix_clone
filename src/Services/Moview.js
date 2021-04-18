import Axios from 'axios';
import { AllUrl } from './Url';

export const fetchMoviesData = async (url_to_fetch)=> {
     const { data } = await Axios.get(AllUrl[`${url_to_fetch}`])
     return data;

}