import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Apropos = () => {
  return (
    <div>
      <Navbar />
      <h1 className="Title-apropos"> À propos de FilmFlow </h1>
      <h2 className="Title2"> Projet de Fin d'Études de Mohamed Ali Akid</h2>
      <p className="Texte">
      Bienvenue sur FilmFlow, une plateforme cinématographique captivante conçue par Mohamed Ali Akid et Ismaël Moreau-Tardif, dans le cadre de nos projets de fin d'études respectifs. Ce projet novateur est le fruit de l'application des connaissances acquises tout au long de nos programmes d'études en développement web. Mohamed Ali Akid, étudiant passionné en développement web, a mis en œuvre ses compétences et sa créativité pour donner vie à FilmFlow. Ce projet représente non seulement son engagement envers l'apprentissage, mais aussi sa passion pour le monde du cinéma.
    <br /> 
    Ismaël Moreau-Tardif, également étudiant talentueux en développement web, a joué un rôle significatif dans la réalisation de ce projet. Son expertise en React a été essentielle pour créer une interface utilisateur moderne et réactive.
    <br /> 
    Notre plateforme a été développée en utilisant la bibliothèque React, démontrant ainsi notre maîtrise du développement d'applications front-end modernes. La flexibilité et la réactivité de React ont été exploitées pour offrir une expérience utilisateur fluide et immersive.
    <br />
    Elle propose une variété de fonctionnalités facilitant la découverte de nouveaux films, telles que la recherche par catégorie, la consultation des détails complets des films, et le suivi des acteurs préférés. La mise en œuvre judicieuse de l'API de The Movie Database (TMDB) permet d'accéder à une vaste base de données de films.
    <br />
    Cette plateforme n'est pas seulement un site de cinéma, mais aussi le témoignage de notre parcours académique. Chaque composant, chaque interaction et chaque ligne de code reflètent les compétences techniques et la créativité que nous avons développées au fil de nos études.
    <br />
    Ce projet marque le début de carrières prometteuses pour Mohamed Ali Akid et Ismaël Moreau-Tardif, combinant leur amour pour le développement web avec leur passion pour le septième art. Il sert de prélude à de futures innovations et réalisations dans le domaine du développement d'applications web.
</p>

      <Footer />
    </div>
  );
};

export default Apropos;
