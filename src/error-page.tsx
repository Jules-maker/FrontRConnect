import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Désolé une erreur est survenue</p>
        <p>
            <a href="/">Retour à la page d'accueil</a>
        </p>
    </div>
  );
}