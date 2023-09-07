
import React, { useState } from "react";
import './data.css';

const Weather = () => {
    const [fromdate, setFromdate] = useState('');
    const [todate, setTodate] = useState('');
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false); 

    const handleFromdateChange = (e) => {
        setFromdate(e.target.value);
    };

    const handleTodateChange = (e) => {
        setTodate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const fromDateObj = new Date(fromdate);
        const toDateObj = new Date(todate);
        const diffDays = Math.ceil((toDateObj - fromDateObj) / (1000 * 60 * 60 * 24));
        
        const data = 
                        [
                                        {
                                            day:0,
                                            temp:68,
                                            image:"data:image/jpeg;base64,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",
                                            message:"WINDY"
                                        },
                                        {
                                            day:1,
                                            temp:74,
                                            image:"https://static.vecteezy.com/system/resources/thumbnails/019/906/439/small/sun-graphic-clipart-design-free-png.png",
                                            message:"SUNNY"  
                                        },
                                        {
                                            day:2,
                                            temp:83,
                                            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Weather-rain-thunderstorm.svg/1200px-Weather-rain-thunderstorm.svg.png",
                                            message:"THUNDERSTORMS"
                                        },
                                       {
                                        day:3,
                                            temp:75,
                                            image:"https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_640.png",
                                            message:"MOSTLY CLOUDY"
                                       },
                                       {
                                        day:4,
                                            temp:82,
                                            image:"https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_640.png",
                                            message:"CLOUDY"
                                       },
                                       {
                                        day:5,
                                            temp:81,
                                            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pEcq8SaJ2Xwtww9YKYsi0YM7YdrhHfVyU_V7E_7K&s",
                                            message:"RAIN"
                                       },
                                       {
                                        day:6,
                                            temp:90,
                                            image:"https://static.vecteezy.com/system/resources/thumbnails/019/906/439/small/sun-graphic-clipart-design-free-png.png",
                                            message:"SUNNY"
                                       }
                                    
                    ];
        
        if (diffDays === 7) {
            setShowData(true);
            setData(data);
            showData(data);
           
            return data;
            
        } else {
            alert("Dates should be exactly 7 days apart.");
            
          
        }
        if(fromdate<=todate) {
            setData(data);
        } else {
            alert("enter date which has difference exactly 7");
        }
    };

    return (
        <div>
            <input
                type="date"
                id="fromdate"
                name="fromdate"
                placeholder="From date"
                value={fromdate}
                onChange={handleFromdateChange}
            />
            <br /> <br />
            <input
                type="date"
                id="todate"
                name="todate"
                placeholder="To date"
                value={todate}
                onChange={handleTodateChange}
            />
            <br /> <br />
            <button onClick={handleSubmit}>Submit</button>
            
           
             
                <div className="card-container">
                    {data.map((item) => (
                        <div key={item.day} className="card">
                            <img src={item.image} alt="Weather Icon" />
                            <h4>Temp: {item.temp}</h4>
                            <h4>Message: {item.message}</h4>
                            <h4>Day: {item.day}</h4>
                        </div>
                    ))}
                </div>
       
        </div>
    );
};

export default Weather;
