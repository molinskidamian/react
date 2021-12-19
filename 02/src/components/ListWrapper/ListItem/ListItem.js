import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ image, name, description, twitterLink }) => (
    <li className="listItem__wrapper">
        <img className="listItem__image" src={image} alt={name} />
        <div>
            <h2 className="listItem__name">{name}</h2>
            <p className="listItem__description">{description}</p>
            <a className="listItem__link" href={twitterLink}>
                visit on twitter
            </a>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: "One of creator Library React!",
};

export default ListItem;
