import React, { useState, useEffect } from "react";
import {
  Navbar,
  Page,
  BlockTitle,
  Row,
  Col,
  Block,
  Card,
  Button,
} from "framework7-react";
import TypeData from "./TypeData.js";
// import "./TypeCalc.css";
// import "nes.css/css/nes.min.css";

const TypeDataFunc = () => {
  const [type1nameImg, setType1NameImg] = useState([]);
  const [type2nameImg, setType2NameImg] = useState([]);
  const [type1name, setType1Name] = useState([]);
  const [type2name, setType2Name] = useState([]);
  const [type1AtkSE, setType1AtkSE] = useState([]);
  const [type1AtkNE, setType1AtkNE] = useState([]);
  const [type1AtkNF, setType1AtkNF] = useState([]);
  const [type1AtkImgSE, setType1AtkSEImg] = useState([]);
  const [type1AtkImgNE, setType1AtkNEImg] = useState([]);
  const [type1AtkImgNF, setType1AtkNFImg] = useState([]);
  const [type2AtkSE, setType2AtkSE] = useState([]);
  const [type2AtkNE, setType2AtkNE] = useState([]);
  const [type2AtkNF, setType2AtkNF] = useState([]);
  const [type2AtkImgSE, setType2AtkSEImg] = useState([]);
  const [type2AtkImgNE, setType2AtkNEImg] = useState([]);
  const [type2AtkImgNF, setType2AtkNFImg] = useState([]);
  const [weakSt, setWeakSt] = useState([]);
  const [weakStImg, setWeakStImg] = useState([]);
  const [resistSt, setResistSt] = useState([]);
  const [resistStImg, setResistStImg] = useState([]);
  const [immuneSt, setImmuneSt] = useState([]);
  const [immuneStImg, setImmuneStImg] = useState([]);
  const [currentTypeBtn, setCurrentTypeBtn] = useState("type1");
  const nameArr = TypeData.map((e) => {
    return e;
  });
  const btnRender = () => {
    if (currentTypeBtn === "type1") {
      return renderTypeBtn1();
    }
    if (currentTypeBtn === "type2") {
      return renderTypeBtn2();
    }
    // if (currentTypeBtn === "clear") {
    //   return clearTypeFunc();
    // }
  };
  const renderTypeBtn1 = () => {
    return (
      <div id="type1Btn" key="type1Btn">
        {TypeData.map((type) => (
          <button
            key={`typeBtn${type.id}`}
            className={type.name}
            src={type.imgSrc}
            onClick={() => {
              setType1Name(type.name);
              setType1AtkSE(type.superEff);
              setType1AtkNE(type.notEff);
              setType1AtkNF(type.noFx);
              setWeakSt(type.weak);
              setResistSt(type.resist);
              setImmuneSt(type.immune);
              setCurrentTypeBtn("type2");
            }}
            style={{
              width: "25%",
              border: "none",
              background: "none",
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
        ))}
      </div>
    );
  };
  const renderTypeBtn2 = () => {
    return (
      <div id="type2Btn" key="type2Btn">
        {TypeData.map((type) => (
          <button
            key={`typeBtn${type.id}`}
            className={type.name}
            src={type.imgSrc}
            onClick={() => {
              setType2Name(type.name);
              setType2AtkSE(type.superEff);
              setType2AtkNE(type.notEff);
              setType2AtkNF(type.noFx);
              adjustWeak(type);
              adjustRes(type);
              adjustImmu(type);
              setCurrentTypeBtn("clear");
            }}
            style={{
              width: "25%",
              border: "none",
              background: "none",
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
        ))}
      </div>
    );
  };
  // const clearTypeFunc = () => {
  //   return (
  //     <Button
  //       className="button-round button-fill	button-raised	button-outline	"
  //       onClick={() => {
  //         clearTypes();
  //         setCurrentTypeBtn("type1");
  //       }}
  //     >
  //       Reset
  //     </Button>
  //   );
  // };

  useEffect(() => {
    let weakImgArr = [];
    nameArr.forEach((e) => {
      if (weakSt.includes(e.name)) {
        weakImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setWeakStImg(weakImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weakSt]);
  useEffect(() => {
    let resistImgArr = [];
    nameArr.forEach((e) => {
      if (resistSt.includes(e.name)) {
        resistImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setResistStImg(resistImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resistSt]);
  useEffect(() => {
    let immuneImgArr = [];
    nameArr.forEach((e) => {
      if (immuneSt.includes(e.name)) {
        immuneImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setImmuneStImg(immuneImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immuneSt]);
  useEffect(() => {
    let type1ImgArr = [];

    nameArr.forEach((e) => {
      if (type1name.includes(e.name)) {
        type1ImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType1NameImg(type1ImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1name]);
  useEffect(() => {
    let type2ImgArr = [];
    nameArr.forEach((e) => {
      if (type2name.includes(e.name)) {
        type2ImgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType2NameImg(type2ImgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2name]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type1AtkSE.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType1AtkSEImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkSE]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type1AtkNE.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType1AtkNEImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkNE]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type1AtkNF.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType1AtkNFImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkNF]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type2AtkSE.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType2AtkSEImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkSE]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type2AtkNE.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType2AtkNEImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkNE]);
  useEffect(() => {
    let imgArr = [];
    nameArr.forEach((e) => {
      if (type2AtkNF.includes(e.name)) {
        imgArr.push(<img alt={e.name} key={e.name} src={e.imgSrc} />);
        setType2AtkNFImg(imgArr);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkNF]);

  function removeDuplicates(data) {
    return data.filter((val, i) => data.indexOf(val) === i);
  }
  function adjustWeak(props) {
    let resistArr = resistSt.concat(props.resist);
    let immuneArr = immuneSt.concat(props.immune);
    let weakArr = [];
    weakSt.map((e) => {
      return weakArr.push(e);
    });
    let newWeakArr = weakArr.concat(props.weak);
    newWeakArr = newWeakArr.filter((val) => !resistArr.includes(val));
    newWeakArr = newWeakArr.filter((val) => !immuneArr.includes(val));
    setWeakSt(removeDuplicates(newWeakArr));
  }
  function adjustRes(props) {
    let weakArr = weakSt.concat(props.weak);
    let resistArr = [];
    resistSt.map((e) => {
      return resistArr.push(e);
    });
    let newResistArr = resistArr.concat(props.resist);
    newResistArr = newResistArr.filter((val) => !weakArr.includes(val));
    setResistSt(removeDuplicates(newResistArr));
  }
  function adjustImmu(props) {
    let immuArr = immuneSt.concat(props.immune);
    setImmuneSt(removeDuplicates(immuArr));
  }
  function clearTypes() {
    setType1Name([]);
    setType2Name([]);
    setType1NameImg([]);
    setType2NameImg([]);
    setWeakSt([]);
    setResistSt([]);
    setImmuneSt([]);
    setWeakStImg([]);
    setResistStImg([]);
    setImmuneStImg([]);
    setType1AtkSE([]);
    setType1AtkSEImg([]);
    setType1AtkNE([]);
    setType1AtkNEImg([]);
    setType1AtkNF([]);
    setType1AtkNFImg([]);
    setType2AtkSE([]);
    setType2AtkSEImg([]);
    setType2AtkNE([]);
    setType2AtkNEImg([]);
    setType2AtkNF([]);
    setType2AtkNFImg([]);
  }

  return (
    <div>
      {/* <Block className="grid"> */}
      <Row id="typeRow">
        {/* <Block className="typeCards"> */}
        <Card className="data-table card " id="type1Card">
          <table>
            <thead>
              <tr className="type1Name" style={{ left: "100px" }}>
                <th>{type1nameImg}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Super Effective:</th>
              </tr>
              <tr>
                <td className="superEff">{type1AtkImgSE}</td>
              </tr>

              <tr>
                <th>Not Very Effective:</th>
              </tr>
              <tr>
                <td className="notVeryEff">{type1AtkImgNE}</td>
              </tr>
              <tr>
                <th>No Effect:</th>
              </tr>
              <tr>
                <td className="superEff">{type1AtkImgNF}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card className="data-table card" id="type2Card">
          <table>
            <thead>
              <tr className="type2Name" style={{ left: "100px" }}>
                <th>{type2nameImg}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Super Effective:</th>
              </tr>
              <tr>
                <td className="superEff">{type2AtkImgSE}</td>
              </tr>

              <tr>
                <th>Not Very Effective:</th>
              </tr>
              <tr>
                <td className="notVeryEff">{type2AtkImgNE}</td>
              </tr>
              <tr>
                <th>No Effect:</th>
              </tr>
              <tr>
                <td className="superEff">{type2AtkImgNF}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        {/* </Block> */}
      </Row>
      {/* </Block> */}
      <Row id="resetButton">
        <Block>
          <Button
            className="button-round button-fill	button-raised	button-outline	"
            onClick={() => {
              clearTypes();
              setCurrentTypeBtn("type1");
            }}
          >
            Reset
          </Button>
        </Block>

        <Block>
          <Row id="btnBlock">
            <div id="btnCard">
              <Card content={btnRender()}>{/* {btnRender()} */}</Card>
            </div>
          </Row>
        </Block>
      </Row>
    </div>
  );
};
export default TypeDataFunc;
