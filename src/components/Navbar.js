import { Link, useLocation } from "wouter";
import SearchForm from "./SearchForm";

export default function Navbar() {
    const [location] = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    BBC - News
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current="page">
                                Top Headlines
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/science" className={`nav-link ${location === '/science' ? 'active' : ''}`}>
                                Science
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/technology" className={`nav-link ${location === '/technology' ? 'active' : ''}`}>
                                Technology
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/entertainment" className={`nav-link ${location === '/entertainment' ? 'active' : ''}`}>
                                Entertainment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/business" className={`nav-link ${location === '/business' ? 'active' : ''}`}>
                                Business
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/health" className={`nav-link ${location === '/health' ? 'active' : ''}`}>
                                Health
                            </Link>
                        </li>

                    </ul>
                    <SearchForm />
                </div>
            </div>
        </nav>
    );
}