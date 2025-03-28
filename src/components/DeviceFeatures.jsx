import React from "react";
import { chargerFeatures, meterFeatures } from "./features";

const allFeatures = { ...chargerFeatures, ...meterFeatures };

function link(feature) {
  if (feature === "sponsorfree") {
    return "/docs/sponsorship";
  }
  return "#features";
}

export default ({ features }) => {
  const featureList = features ? features.split(",") : [];

  const validFeatures = featureList.filter((f) => allFeatures[f]);

  let classes = "features";
  validFeatures.forEach((f) => {
    classes += ` feature-${f}`;
  });
  return (
    <div className={classes}>
      {featureList.map((f) => (
        <a href={link(f)} className="feature" key={f}>
          {allFeatures[f] || f}
        </a>
      ))}
    </div>
  );
};
