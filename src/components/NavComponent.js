import Card from "./Card";
import useData from "../customs/useData";
import CardPlaceholder from "./CardPlaceholder";

export default function NavComponent({url, heading, navKey}) {
    const data = useData(navKey, url);
    console.log(data);
    return (
        <div className="container">
            <h1 className="text-center py-3">{heading}</h1>
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-evenly p-3 g-5">
                {data ?
                data.map((val, ind) => {
                    return <div key={ind}><Card data={val} key={ind}/></div>
                }) :
                Array(12).fill().map((_,index) => <div key={index}><CardPlaceholder /></div>)
            }
            </div>
        </div>
    );
}