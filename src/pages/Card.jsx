import React, { useState } from "react";
import "./card.css";

const AnimationCard = () => {
  const [xAxis, setxAxis] = useState(0);
  const [yAxis, setyAxis] = useState(0);
  const [transitioning, setTransitioning] = useState(null);
  const [titleTransform, setTitleTransform] = useState(null);
  const [sneakerTransform, setSneakerTransform] = useState(null);
  const [purchaseTransform, setpurchaseTransform] = useState(null);
  const [descTransforms, setdescTransform] = useState(null);
  const [sizeTransform, setsizeTransform] = useState(null);

  const styles = {
    cardStyles: {
      transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`,
      transition: `${transitioning}`,
    },
    titleStyle: {
      transform: `${titleTransform}`,
    },
    sneakerStyle: {
      transform: `${sneakerTransform}`,
    },
    purchaseStyle: {
      transform: `${purchaseTransform}`,
    },
    descStyle: {
      transform: `${descTransforms}`,
    },
    sizeStyle: {
      transform: `${sizeTransform}`,
    },
  };

  const rotateCard = (e) => {
    setxAxis((window.innerWidth / 2 - e.pageX) / 20);
    setyAxis((window.innerHeight / 2 - e.pageY) / 20);
  };

  const onAnimateIn = (e) => {
    setTransitioning("none");
    //popout
    setTitleTransform("translateZ(150px)");
    setSneakerTransform("translateZ(150px) rotate(-45deg)");
    setpurchaseTransform("translateZ(75px)");
    setdescTransform("translateZ(125px)");
    setsizeTransform("translateZ(100px)");
  };

  const onAnimateOut = () => {
    setTransitioning("all 500ms ease");
    setxAxis(0);
    setyAxis(0);
    //popback
    setTitleTransform("translateX(0px)");
    setSneakerTransform("translateZ(0px) rotate(0deg)");
    setpurchaseTransform("translateZ(0px)");
    setdescTransform("translateZ(0px)");
    setsizeTransform("translateZ(0px)");
  };

  return (
    <div className="body">
      <div className="container" onMouseMove={(e) => rotateCard(e)} onMouseLeave={(e) => onAnimateOut(e)} onMouseEnter={(e) => onAnimateIn(e)}>
        <div className="card" style={styles.cardStyles}>
          <div className="sneakers">
            <div className="circle" />
            <img src={require("./../helper/dna.png")} alt="nike" style={styles.sneakerStyle} />
          </div>
          <div className="info">
            <h1 className="title" style={styles.titleStyle}>
              Adidas DNA
            </h1>
            <h3 style={styles.descStyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur unde id eligendi iusto non incidunt magni sit deserunt !</h3>
            <div className="sizes" style={styles.sizeStyle}>
              <button>40</button>
              <button>41</button>
              <button>42</button>
              <button>43</button>
            </div>
            <div className="purchase" style={styles.purchaseStyle}>
              <button>purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCard;
