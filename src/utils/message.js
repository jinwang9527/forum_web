import {Message,MessageBox} from 'element-ui'


export function errorMessageBox() {
  return new Promise((resolve , reject)=>{
  MessageBox.confirm(message,'提示',{
    confirmButtonText:'确认',
    showCancelButton:false,
    type:'warning '
  }).then(()=>{
    resolve()
  }).catch(()=>{
    reject()
  })
  })
}
