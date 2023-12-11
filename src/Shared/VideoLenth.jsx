import React from "react";
import moment from "moment/moment";

const VideoLenth = ({ time }) => {
  const videoLenthInSecond = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className=" absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLenthInSecond}
    </div>
  );
};

export default VideoLenth;
