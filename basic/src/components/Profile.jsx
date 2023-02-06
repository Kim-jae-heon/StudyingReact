import IndividualImg from "./IndividualImg";
import TagNew from "./TagNew";

export default function Profile({ image, name, title, newWorker }) {
    return (
        <div className="profile">
            <IndividualImg image={image} />
            <h1>{name}</h1>
            <p>{title}</p>
            {newWorker ? <TagNew /> : null}
        </div>
    );
}

