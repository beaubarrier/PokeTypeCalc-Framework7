import React, { useState, useEffect, useRef } from 'react'
import {
  Navbar,
  Page,
  View,
  PageContent,
  BlockTitle,
  Row,
  Col,
  Block,
  Card,
  Button,
  Popover,
  List,
  ListItem,
  Link,
  Popup,
  NavRight,
  NavLeft,
  Fab,
  FabButton,
  FabButtons
} from 'framework7-react'
import TypeData from './TypeData'
import './css/app.scss'
import superEffDefenseIcon from './assets/superEffDefenseIcon.png'
import resistDefenseIcon from './assets/resistDefenseIcon.png'
import immuneDefenseIcon from './assets/immuneDefenseIcon.png'

// import ProgressbarComponent from 'framework7/types/components/progressbar/progressbar'

const TypeDataFunc = () => {
  const [type1nameImg, setType1NameImg] = useState([])
  const [type2nameImg, setType2NameImg] = useState([])
  const [type1name, setType1Name] = useState([])
  const [type2name, setType2Name] = useState([])
  const [type1AtkSE, setType1AtkSE] = useState([])
  const [type1AtkNE, setType1AtkNE] = useState([])
  const [type1AtkNF, setType1AtkNF] = useState([])
  const [type1AtkImgSE, setType1AtkSEImg] = useState([])
  const [type1AtkImgNE, setType1AtkNEImg] = useState([])
  const [type1AtkImgNF, setType1AtkNFImg] = useState([])
  const [type2AtkSE, setType2AtkSE] = useState([])
  const [type2AtkNE, setType2AtkNE] = useState([])
  const [type2AtkNF, setType2AtkNF] = useState([])
  const [type2AtkImgSE, setType2AtkSEImg] = useState([])
  const [type2AtkImgNE, setType2AtkNEImg] = useState([])
  const [type2AtkImgNF, setType2AtkNFImg] = useState([])
  const [weakSt, setWeakSt] = useState([])
  const [weakStImg, setWeakStImg] = useState([])
  const [resistSt, setResistSt] = useState([])
  const [resistStImg, setResistStImg] = useState([])
  const [immuneSt, setImmuneSt] = useState([])
  const [immuneStImg, setImmuneStImg] = useState([])
  const [currentTypeBtn, setCurrentTypeBtn] = useState('type1')
  const popup = useRef(null)
  const onPageBeforeRemove = () => {
    if (popup.current) popup.current.destroy()
  }

  const nameArr = TypeData.map(e => {
    return e
  })
  const btnRender = () => {
    if (currentTypeBtn === 'type1') {
      return renderTypeBtn1()
    }
    if (currentTypeBtn === 'type2') {
      return renderTypeBtn2()
    }
    // if (currentTypeBtn === "clear") {
    //   return clearTypeFunc();
    // }
  }

  const renderTypeBtn1 = () => {
    return (
      <div id='type1Btn' key='type1Btn'>
        {TypeData.map(type => (
          <Link
            popupClose
            key={`typeBtn${type.id}`}
            className={`${type.name}  popupBtn`}
            src={type.imgSrcC}
            onClick={() => {
              setType1Name(type.name)
              setType1AtkSE(type.superEff)
              setType1AtkNE(type.notEff)
              setType1AtkNF(type.noFx)
              setWeakSt(type.weak)
              setResistSt(type.resist)
              setImmuneSt(type.immune)
              setCurrentTypeBtn('type2')
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrcC} />
          </Link>
        ))}
      </div>
    )
  }
  const renderTypeBtn2 = () => {
    return (
      <div id='type2Btn' key='type2Btn'>
        {TypeData.map(type => (
          <Link
            popupClose
            key={`typeBtn${type.id}`}
            className={`${type.name} typeBtnStyle`}
            src={type.imgSrcC}
            onClick={() => {
              setType2Name(type.name)
              setType2AtkSE(type.superEff)
              setType2AtkNE(type.notEff)
              setType2AtkNF(type.noFx)
              adjustWeak(type)
              adjustRes(type)
              adjustImmu(type)
              setCurrentTypeBtn('clear')
            }}
          >
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrcC} />
          </Link>
        ))}
      </div>
    )
  }
  const clearTypeFunc = () => {
    return (
      <div className='center'>
        <Button
          className='button-round button-fill	button-raised	button-outline 	'
          onClick={() => {
            clearTypes()
            setCurrentTypeBtn('type1')
          }}
          style={{ margin: '20px' }}
        >
          Reset
        </Button>
      </div>
    )
  }
  const ColoredLine = ({ color }) => (
    <hr
      id='hrLine'
      style={{
        color: { color },
        backgroundColor: 'rgb(57, 57, 57)',
        height: 1,
        borderRadius: 10,
        width: '90%',
        border: 'none'
        // marginTop: '100px',
        // marginBottom: '60px',
        // marginRight: '5.5%'
      }}
    />
  )

  useEffect(() => {
    let weakImgArr = []
    nameArr.forEach(e => {
      if (weakSt.includes(e.name)) {
        weakImgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            style={{ width: '20px', marginLeft: '2px', marginTop: '2px' }}
            className='typeWidth'
          />
        )
        setWeakStImg(weakImgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weakSt])
  useEffect(() => {
    let resistImgArr = []
    nameArr.forEach(e => {
      if (resistSt.includes(e.name)) {
        resistImgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            style={{ width: '20px', marginLeft: '2px', marginTop: '2px' }}
            className='typeWidth'
          />
        )
        setResistStImg(resistImgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resistSt])
  useEffect(() => {
    let immuneImgArr = []
    nameArr.forEach(e => {
      if (immuneSt.includes(e.name)) {
        immuneImgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            style={{ width: '20px', marginLeft: '2px', marginTop: '2px' }}
            className='typeWidth'
          />
        )
        setImmuneStImg(immuneImgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immuneSt])
  useEffect(() => {
    let type1ImgArr = []

    nameArr.forEach(e => {
      if (type1name.includes(e.name)) {
        type1ImgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '30px',
              border: 'none',
              background: 'none',
              justifySelf: 'center'
            }}
          />
        )
        setType1NameImg(type1ImgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1name])
  useEffect(() => {
    let type2ImgArr = []
    nameArr.forEach(e => {
      if (type2name.includes(e.name)) {
        type2ImgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '30px',
              border: 'none',
              background: 'none',
              justifySelf: 'center'
            }}
          />
        )
        setType2NameImg(type2ImgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2name])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type1AtkSE.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            //Size of image in field
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType1AtkSEImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkSE])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type1AtkNE.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType1AtkNEImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkNE])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type1AtkNF.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType1AtkNFImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1AtkNF])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type2AtkSE.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType2AtkSEImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkSE])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type2AtkNE.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType2AtkNEImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkNE])
  useEffect(() => {
    let imgArr = []
    nameArr.forEach(e => {
      if (type2AtkNF.includes(e.name)) {
        imgArr.push(
          <img
            alt={e.name}
            key={e.name}
            src={e.imgSrcC}
            className='typeWidth'
            style={{
              width: '20px',
              border: 'none',
              background: 'none',
              float: 'center',
              marginLeft: '2px',
              marginTop: '2px'
            }}
          />
        )
        setType2AtkNFImg(imgArr)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type2AtkNF])

  function removeDuplicates (data) {
    return data.filter((val, i) => data.indexOf(val) === i)
  }
  function adjustWeak (props) {
    let resistArr = resistSt.concat(props.resist)
    let immuneArr = immuneSt.concat(props.immune)
    let weakArr = []
    weakSt.map(e => {
      return weakArr.push(e)
    })
    let newWeakArr = weakArr.concat(props.weak)
    newWeakArr = newWeakArr.filter(val => !resistArr.includes(val))
    newWeakArr = newWeakArr.filter(val => !immuneArr.includes(val))
    setWeakSt(removeDuplicates(newWeakArr))
  }
  function adjustRes (props) {
    let weakArr = weakSt.concat(props.weak)
    let resistArr = []
    resistSt.map(e => {
      return resistArr.push(e)
    })
    let newResistArr = resistArr.concat(props.resist)
    newResistArr = newResistArr.filter(val => !weakArr.includes(val))
    setResistSt(removeDuplicates(newResistArr))
  }
  function adjustImmu (props) {
    let immuArr = immuneSt.concat(props.immune)
    setImmuneSt(removeDuplicates(immuArr))
  }

  function clearTypes () {
    setType1Name([])
    setType2Name([])
    setType1NameImg([])
    setType2NameImg([])
    setWeakSt([])
    setResistSt([])
    setImmuneSt([])
    setWeakStImg([])
    setResistStImg([])
    setImmuneStImg([])
    setType1AtkSE([])
    setType1AtkSEImg([])
    setType1AtkNE([])
    setType1AtkNEImg([])
    setType1AtkNF([])
    setType1AtkNFImg([])
    setType2AtkSE([])
    setType2AtkSEImg([])
    setType2AtkNE([])
    setType2AtkNEImg([])
    setType2AtkNF([])
    setType2AtkNFImg([])
  }
  const [hidden, setHidden] = useState('showDisplay')
  const changeHidden = () => {
    setHidden('noDisplay')
  }
  const [typeBtn2Vis, setTypeBtn2Vis] = useState('noDisplay')
  const changeTypeBtn2Vis = () => {
    if (typeBtn2Vis == 'noDisplay') {
      setTypeBtn2Vis('showDisplay')
    } else {
      setTypeBtn2Vis('noDisplay')
    }
  }
  const [resetBtnVis, setResetBtnVis] = useState('noDisplay')
  const changeResetBtnVis = () => {
    if (resetBtnVis == 'noDisplay') {
      setResetBtnVis('showDisplay')
    } else {
      setResetBtnVis('noDisplay')
    }
  }

  return (
    <div id='div'>
      {/* style={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'flex-end'
        }}
     */}
      <Card
        style={{
          alignSelf: 'flex-start',
          justifySelf: 'flex-start',
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <Col style={{ height: '100%' }}></Col>
        <Card title='' style={{}}>
          <Col>
            <img
              style={{ width: '10%', alignSelf: 'center' }}
              className='superEffDefenseIcon'
              src={superEffDefenseIcon}
            />

            {weakStImg}
          </Col>
        </Card>
        <Card>
          <Col>
            <img
              style={{ width: '10%' }}
              className='resistDefenseIcon'
              src={resistDefenseIcon}
            />
            {resistStImg}
          </Col>
        </Card>
        <Card>
          <Col>
            <img
              style={{ width: '10%' }}
              className='immuneEffDefenseIcon'
              src={immuneDefenseIcon}
            />
            {immuneStImg}
          </Col>
        </Card>
      </Card>
      <Button
        fill
        id='fab'
        slot='fixed'
        text='Select Type 1'
        position='center-bottom'
        popupOpen='.demo-popup'
        className={hidden}
        onClick={() => {
          changeHidden()
          changeTypeBtn2Vis()
        }}
      ></Button>
      <Button
        // id='btn1'
        fill
        id='fab'
        text='Select Type 2'
        position='center-bottom'
        // style={{ position: 'flex-end' }}
        popupOpen='.demo-popup2'
        className={typeBtn2Vis}
        onClick={() => {
          changeHidden()
          changeTypeBtn2Vis()
          changeResetBtnVis()
        }}
      ></Button>
      <Button
        fill
        id='fab'
        className={resetBtnVis}
        style={{}}
        onClick={() => {
          clearTypes()
          changeResetBtnVis()
          setHidden()
        }}
      >
        Reset
      </Button>

      {/* <Button
        fill
        popupOpen='.demo-popup2'
        className={typeBtn2Vis}
        style={{ width: '100%' }}
        onClick={() => {
          changeTypeBtn2Vis()
          changeResetBtnVis()
        }}
      >
        Select Type 2
      </Button>
      <Button
        fill
        className={resetBtnVis}
        style={{ width: '100%' }}
        onClick={() => {
          clearTypes()
          changeResetBtnVis()
          setHidden()
        }}
      >
        Reset
      </Button> */}
      <Popup className='demo-popup'>
        <Navbar>
          Select Type 1
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>

        <Block
          className='center'
          style={{
            display: 'flexbox',
            alignContent: '',
            flexWrap: 'wrap'
          }}
        >
          {renderTypeBtn1()}
        </Block>
      </Popup>
      <Popup className='demo-popup2'>
        <Navbar>
          Select Type 2
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>

        <Block
          className='center'
          style={{
            display: 'flexbox',
            alignContent: '',
            flexWrap: 'wrap'
          }}
        >
          {renderTypeBtn2()}
        </Block>
      </Popup>
      {/* 
      <Col className='center'> {type1nameImg}</Col>
      <Col className='center'>{type2nameImg}</Col> */}
      {/* 
      <Block className='center'>
        <Col>
          <Card title='Defences' style={{ width: '100%' }}></Card>
        </Col>
      </Block> */}
    </div>
  )
}
export default TypeDataFunc
