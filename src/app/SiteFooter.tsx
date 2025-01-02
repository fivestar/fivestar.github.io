import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small className="footer__text">&copy; 2025 Katsuhiro Ogawa</small>
        <small className="footer__text">
          <a href="https://github.com/fivestar/fivestar.github.io" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            <span className="visually-hidden">GitHub</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
