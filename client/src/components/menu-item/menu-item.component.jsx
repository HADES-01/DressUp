import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();
  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
