import { useState, useEffect } from "react";
import "./historyPage.css";
import Navbar from "../common/navbar/navbar";

const HistoryPage = (props) => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getData = async () => {
        try {
            const res = await fetch(
                `${process.env.BACKEND_URL}/api/v1/images/get-all-image`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: "Bearer " + localStorage.getItem("authorization"),
                    },
                }
            );

            if (!res.ok) {
                const errorText = await res.text();
                console.error("Error fetching data:", errorText);
                return;
            }
            const obj = await res.json();
            console.log(obj.data);
            setData(obj.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return (
        <div>
            <Navbar page="history" />
            <input className="search-box-input" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} />
            <div className="history-main-container">
                {data.map((item) => (
                    <div className="history-card" key={item._id}>
                        <img src={item.imageUrl} alt={item.searchText} />
                        <div className="history-card-content">
                            <h4>{item.searchText}</h4>
                            <p>{item.imageUrl}</p>
                            {/* Uncomment if needed */}
                            {/* <Link to={`${item.imageUrl}`}>open...</Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryPage;
