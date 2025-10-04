import Layout from "../Layout";
import n from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={n.notFoundWrapper}>
      <h1>404 – Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist or may have been moved.</p>
    </div>
  )
}