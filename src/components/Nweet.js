import React from "react";

const Nweet=({nweetObj, isOwner})=>{
    return (
        <div>
            <h4>
                {nweetObj.text}
                <span style={{marginLeft:"15px"}}>
                    {
                    isOwner && (
                        <>
                            <button>Delete Nweet</button>
                            <button>Edit Nweet</button>
                        </>
                    )}
                </span>
            </h4>
            
        </div>
    );
};

export default Nweet;