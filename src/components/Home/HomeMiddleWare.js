import { API_KEY } from "../common-component/API/Api.js"
import { add } from "../../slice/home/homeSlice.js";

const HomeMiddleWare = (quary) => {
   return async (dispatch) => {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${quary}&key=${API_KEY}&type=video&videoDuration=long`)
        const data = await response.json();
        dispatch(add(data));
    }
}
export default HomeMiddleWare;