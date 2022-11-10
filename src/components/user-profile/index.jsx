import React from "react";
import "./styles.css";

const UserProfile = (props) => {
  return (
    <div>
      <h1>Personal Information</h1>
      <ul className="profile-list">
        {props.data.map((content) => (
          <li>
            <span>
              <strong>ID:</strong> {content.id}
            </span>
            <span>
              <strong>ModelName:</strong> {content.modelName}
            </span>
            <span>
              <strong>bodyType:</strong> {content.bodyType}
            </span>
            <span>
              <strong>modelType:</strong> {content.modelType}
            </span>
            <span>
              <img src={content.imageUrl} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
