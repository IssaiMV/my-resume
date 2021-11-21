import Header from "../layout/Header";
import RunFry from "../assets/gif/run-fry-guy-run.gif";
export default function ComingSoon() {
  return (
    <>
      <Header></Header>
      <main className="comingsoon">
        <figure className="comingsoon__container">
          <img className="comingsoon__image" src={RunFry} alt="Run Fry" />
          <figcaption className="comingsoon__text">Coming Soon</figcaption>
        </figure>
      </main>
    </>
  );
}
