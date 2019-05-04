import React from "react";
import { connect } from "react-redux";

const UserIndex = ({ userData }) => {
  return (
    <div>
      <span role="img" aria-label="User Profile Image" />
      <div>{userData.display_name}</div>
      {userData.images ? (
        <img
          src={userData.images[0].url}
          alt={userData.display_name + "'s Profile Image"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData
});
export default connect(mapStateToProps)(UserIndex);
