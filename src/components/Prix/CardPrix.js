import React from 'react'
import '../../pages/css/Prix.css'

function CardPrix({title,text1,text2,text3,text4,
  showtext1,showtext2,showtext3,showtext4,
  showlist,showlist01,showlist2,showlist3,showlist4,
  list1,list2,list3,list4,list5,list6,list7,
  list8,list9,list10,list11,list12,list13}) {
  return (
    <>
    <div className='cardPrix'>
        <div className='title-card-prix'>{title}</div> 
        <div className=' ligne-prix'></div><br/>
   {showtext1 && <p className='text-card-prix'>{text1}</p> }     
        { showlist &&
          <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
          </ul>
        }
        { showlist01 &&
          <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
          <li>{list9}</li>
          <li>{list10}</li>
          <li>{list11}</li>
          </ul>
        }
        
        {showtext2 && <p className='text-card-prix'>{text2}</p> }  
        {showlist2&&<ul>
          <li>{list5}</li>
        </ul>}
        
        {showtext3 && <p className='text-card-prix'>{text3}</p> }  
        {showlist3&&<ul>
          <li>{list6}</li>
          <li>{list7}</li>
          <li>{list8}</li>
        </ul> } 

        {showtext4 && <p className='text-card-prix'>{text4}</p> }  
        {showlist4&&<ul>
          <li>{list12}</li>
          <li>{list13}</li>
        </ul> } 
    </div>
    </>
  )
}

export default CardPrix