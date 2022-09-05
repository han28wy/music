import { homePage } from "../request/service";

export const blockList = async () =>{
    const res = await homePage();
    res.data.blocks.forEach((item)=>{
        console.log(item)
        if(item.uiElement){
        //   home_block.value.push(i)
        console.log(999999999)
        }
      })
}