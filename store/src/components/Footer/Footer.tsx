import style from "./footer.module.css";
import git from "../../assets/img/git.png"
import git1 from "../../assets/img/git1.png"
import rss from "../../assets/img/rssco.png"

function Footer() {
  return (
    <footer className={style.footer__page}>
      <div className={style.two__columns}>
        <div>
          <a href="https://github.com/semmi1986"><img src={git} alt="git_logo" className={style.logo__git_semmi}/></a>
        </div>
        <div>
          <a href="https://github.com/AlexKaroh"><img src={git1} alt="git_logo" className={style.logo__git_alex}/></a>
        </div>
      </div>
      <div className={style.font}>Online Store 2022</div>
      <div>
        <a href="https://rs.school/js/"><img src={rss} alt="rss_logo" className={style.logo__rss}/></a>
      </div>
    </footer>
  );
}

export default Footer;
