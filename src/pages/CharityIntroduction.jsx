//CharityIntroduction.jsx
import React from "react";
import "../styles/CharityIntroduction.css";
import SaveTheChildrenImage from "../assets/donation_intro/save_the_children_image.png"; // 引入图片
import { Button } from "@mui/material";

function CharityIntroduction(props) {
  const handleNext = () => {
    // 当用户点击“Next”时，导航到 ChatWindow
    props.handleNext();
  };

  return (
    <div className="charity-introduction-container">
      <div className="charity-introduction-content">
        <h1 className="charity-introduction-title">
          Learn About <strong>Save the Children</strong>🏛️
        </h1>
        <p className="charity-introduction-text">
          The charity that we will look at today is{" "}
          <strong>Save the Children</strong>.
        </p>
        <img
          src={SaveTheChildrenImage}
          alt="Save the Children"
          className="charity-introduction-image"
        />
        <p className="charity-introduction-source">
          Image Source:{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>
        <p className="charity-introduction-text">
          Save the Children is a leading global charity founded in 1919,
          dedicated to improving the lives of vulnerable children worldwide. The
          organization provides critical services such as education, healthcare,
          and emergency relief in over 100 countries, particularly in areas
          affected by poverty, conflict, and natural disasters.
        </p>
        <p className="charity-introduction-text">
          <strong>Key Impact Areas:</strong>
        </p>
        <ul className="charity-introduction-list">
          <li>
            <strong>Emergency Response:</strong> Rapid relief during crises,
            offering food, shelter, and medical care.
          </li>
          <li>
            <strong>Education:</strong> Expanding access to quality education to
            empower future generations.
          </li>
          <li>
            <strong>Advocacy:</strong> Influencing global policies to protect
            children's rights.
          </li>
        </ul>
        {/* 网络链接根据zicheng意见，隐藏 */}
        {/* <p className="charity-introduction-text">
          You can learn more and get involved by visiting the{" "}
          <a
            href="https://www.savethechildren.org"
            target="_blank"
            rel="noopener noreferrer"
            className="charity-link"
          >
            Save the Children website
          </a>
          .
        </p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={handleNext}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "8px 16px", // 加大按钮的尺寸
              fontSize: "1rem", // 增大字体
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)", // 更立体的阴影
              transition: "background-color 0.2s ease, transform 0.1s ease",
              textTransform: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.8)"; // 模拟按下的效果
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CharityIntroduction;
