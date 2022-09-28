import React, {useState} from 'react';
import colours from './Colours';



const MultipleColor = () => {
    const [color, setColor] = useState(colours);
    const [search, setSearch] = useState("");
    const [isClick, setIsClick] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [showFooter, setShowFooter] = useState(false);


    return ( 
        <div >
            {showHeader === true ?
                <div className="hdrouter">
                    <div className="colorheading">Color</div>
                    <div className="wordheading"><b>WORD</b></div>
                <div className="header">
                    
                    <div className="innerheader"><input type="text" placeholder="Enter color Name" onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => {
                                setIsClick(true)
                                setShowHeader(false)
                                setShowFooter(true)
                                
                    }} disabled={search.length<1}>Search</button></div>
                </div></div>
                : null
            }

            <div className="box">
                {isClick === false ? null :
                    color.filter((item) => {
                            if (search === "") {
                                return null;
                            }
                            else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                                return item;
                            }
                    }).map((col) => {
                            return (
                                
                                <div className="boxui">
                                    {col.name.toLowerCase().includes("black") ?
                                    <>
                                        <div className="colorbox" style={{backgroundColor:col.hex, color:'white'}}>
                                            <p className="hexa-color">{col.hex}</p>
                                        </div>
                                        <div className="hexname">
                                            <p className="hexa-name">{col.name} </p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="colorbox" style={{backgroundColor:col.hex}}>
                                            <p className="hexa-color">{col.hex} </p>
                                        </div>
                                        <div className="hexname">
                                            <p className="hexa-name">{col.name} </p>
                                        </div>
                                    </>
                                }
                                </div>
                            )

                        })
                    
                    
                }
                
            </div>
            <div className="ftrouter">
            {showFooter === true ?
                <div className="footer">
                    <div className="innerfooter">
                    <input type="text" placeholder="Enter color Name" onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => {
                        setIsClick(true)
                        
                        }}>Search</button>
                        </div>
                        
                </div>
                : null
                }
                </div>
        </div>
    );
}

export default MultipleColor;
