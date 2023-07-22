import { repoLink } from "../constUrl";

const Footer: React.FC = (): JSX.Element => {
    return <footer className="page-footer blue accent-4">
    <div className="footer-copyright">
      <div className="container">
      © 2023 Copyright Text
      <a className="grey-text text-lighten-4 right" href={repoLink}>Repo</a>
      </div>
    </div>
  </footer>
}

export default Footer;