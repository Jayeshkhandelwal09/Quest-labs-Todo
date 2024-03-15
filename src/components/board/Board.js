import React from 'react'
import "./Board.css"
import {MoreHorizontal} from "react-feather"
import Card from '../Card/Card'
import Editable from '../Editable/Editable'

const Board = () => {
  return (
    <div className='board'>
        <div className='board_top'>
        <p className='board_top_title'>Todo <span>2</span> </p>
        <MoreHorizontal/>
        </div>

        <div className='board_cards custom-scroll'>
           <Card/>
           <Card/>
           
           <Editable displayClass="board_cards_add" text="Add Card" placeholder="Enter Card title"/>

        </div>
    </div>
  )
}

export default Board