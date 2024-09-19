import { useDispatch, useSelector } from "react-redux";
import ChannelDetailsMW from "../../../slice/ChannelDetailsSlice/ChannelDetailsMW";


const ChannelInfo = ({channelId}) => {

    const dispatch = useDispatch();
    const channelData = useSelector(state => state.channeldetails)
    console.log(channelData);
    
    return <div>channel info</div>
}

export default ChannelInfo;