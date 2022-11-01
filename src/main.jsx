import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Page,
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
  Link
} from 'framework7-react'
import TypeData from './TypeData'
import './css/app.scss'

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
          <button
            key={`typeBtn${type.id}`}
            className={`${type.name} typeBtnStyle`}
            src={type.imgSrc}
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
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
        ))}
      </div>
    )
  }
  const renderTypeBtn2 = () => {
    return (
      <div id='type2Btn' key='type2Btn'>
        {TypeData.map(type => (
          <button
            key={`typeBtn${type.id}`}
            className={`${type.name} typeBtnStyle`}
            src={type.imgSrc}
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
            <img alt={`typeBtn${type.id}`} key={type.name} src={type.imgSrc} />
          </button>
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

  return (
    <div>
      <Button fill popoverOpen='.popover-menu'>
        Set Type 1
      </Button>

      <Popover className='popover-menu'>
        <List style={{ fontSize: '10pt' }}>
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'red', height: '3em' }}
            title='Fire'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'blue', height: '3em' }}
            title='Water'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'green', height: '3em' }}
            title='Grass'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'yellow', height: '3em' }}
            title='Electric'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'teal', height: '3em' }}
            title='Flying'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'tan', height: '3em' }}
            title='Rock'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'brown', height: '3em' }}
            title='Ground'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'lightblue', height: '3em' }}
            title='Ice'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'gray', height: '3em' }}
            title='Steel'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'Purple', color: 'white', height: '3em' }}
            title='Ghost'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'Pink', height: '3em' }}
            title='Fairy'
          />

          <ListItem
            link='#'
            popoverClose
            style={{ background: 'black', color: 'white', height: '3em' }}
            title='Dark'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'magenta', height: '3em' }}
            title='Psychic'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'lightgreen', height: '3em' }}
            title='Bug'
          />

          <ListItem
            link='#'
            popoverClose
            style={{ background: 'Purple', color: 'white', height: '3em' }}
            title='Poison'
          />

          <ListItem
            link='#'
            popoverClose
            style={{ background: 'white', height: '3em' }}
            title='Normal'
          />
          <ListItem
            link='#'
            popoverClose
            style={{ background: 'maroon', height: '3em' }}
            title='Fighting'
          />
        </List>
      </Popover>
    </div>
  )
}
export default TypeDataFunc
