import { useState, useRef } from "react";
import { routes } from "../customs/routes";
import Modal from "./Modal";
export default function SearchForm() {
    const [text, setText] = useState('');
    const [database, setDatabase] = useState([]);
    const modalBtn = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.length <= 3) {
            alert('please insert more value to search')
        }
        else {
            const urls = routes.map(route => route.url);
            let data = await Promise.all(urls.map(async (url) => {
                const response = await fetch(url);
                const data = await response.json();
                return data.articles.filter(article => article.title.toLowerCase().includes(text.toLowerCase()));
            }));
            setDatabase(data.flat());
            modalBtn.current.click();
            setText('');
        }
    }

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
                Search
            </button>
            <Modal ref={modalBtn} database={database}/>
        </form>
    );
}