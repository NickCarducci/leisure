import React from "react";

class EmploymentVelocity extends React.Component {
  state = {};
  render() {
    const { width } = this.props;
    return (
      <div
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "flex",
          position: "relative",
          left: "0px",
          flexDirection: "column",
          fontSize: "16px",
          width: "100%",
          transition: ".3s ease-out",
          height: this.props.showM1 ? "750px" : "100px"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "min-content",
            height: "750px",
            left: "0px"
          }}
        >
          {width && (
            <iframe
              loading="lazy"
              style={{
                width,
                height: "700px"
              }}
              title="total dollars held"
              src={`https://fred.stlouisfed.org/graph/graph-landing.php?g=BRZs&width=${width}&height=600`}
              className="embed-container1"
            />
          )}
        </div>
      </div>
    );
  }
}
export default EmploymentVelocity;
