
import { API_KEY } from "../../components/common-component/API/Api.js";
import { BASE_URL } from "../../components/common-component/BaseURL/BaseURL.js";
import { addChannelDetails, setError, setLoading } from "./ChannelDetailsSlice.js";

const ChannelDetailsMW = (channelId, videoId) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));  // Optional: set loading state
            const response = await fetch(`${BASE_URL}/channels?key=${API_KEY}&part=snippet,statistics&id=${channelId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}}`);
            }
            const data = await response.json();
            dispatch(addChannelDetails(data.items[0]));
            console.log("channel info", data.items[0]);
        } catch (error) {
            dispatch(setError(error.message));  // Optional: set error state
            console.log(error.message);
        } finally {
            dispatch(setLoading(false));  // Optional: reset loading state
        }
    }
}
export default ChannelDetailsMW;