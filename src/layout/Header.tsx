import { mainPageLink, repoLink } from "../constUrl";

const Header: React.FC = (): JSX.Element => {
    return <nav className="blue accent-4">
        <div className="nav-wrapper">
            <a href={mainPageLink} className="brand-logo">React Movies</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href={repoLink}>Repo</a></li>
            </ul>
        </div>
    </nav>
}

export default Header;