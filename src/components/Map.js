import React from "react";
import Data from "./Data";
import Slot from "./Slot";

const Map=()=>{
    return(
        <>
            {Data.map((item)=>{
                return(
                    <Slot
                      key={item.id}
                      img={item.image}
                      ott={item.ott}
                      alt={item.altt}
                      title={item.title}
                      link={item.links}
                    />
                )
            })}
        </>
    )
}

export default Map;