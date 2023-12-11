import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context/ContextAPI'
import { fetchDataFromApi } from '../Utils/Api';
import LeftNav from './LeftNav';
import SearchResultVedio from './SearchResultVedio';
const SearchResult = () => {

  const [result, setResult] = useState();
  const {searchQuery} = useParams();
  const { setLoding } = useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
fetchSearchResult();
  },[searchQuery])

const fetchSearchResult = () => {
  setLoding(true);
  fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
    console.log(res);
    setResult(res?.contents);
    setLoding(false);
  })
}

  return (
    <div className=' flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
      <div className=" grow w-[calc(100%-240)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {
            result?.map((item)=>{
              if(item?.type  !== "video") return false
              let video = item?.video
              return < SearchResultVedio key={video?.videoId} video={video}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchResult
