import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./style.css";
//import "./style2.css"
import "./icon.css";
import { style } from 'glamor';

class NotificationBox extends StreamlitComponentBase {
  

  public render = (): ReactNode => {
    
  
    const icon:string = this.props.args['icon']
    const textDisplay:any = this.props.args['textDisplay']
    const externalLink:string = this.props.args['externalLink']
    const url:any = this.props.args['url']
    const styles: any = this.props.args['styles'] || {}

    function removeNotification() { 
        const el = document.querySelector('div') as HTMLElement
        el.style.display="none"; 
        
      }
      

    
    return (

      <div className="notification-icon-container">
        <div className="text-icon-link-close-container" {...style(styles['text-icon-link-close-container'])}>
          <i className="material-icons" {...style(styles['material-icons'])}>{icon}</i>
          <div className="notification-text" {...style(styles['notification-text'])}>{textDisplay}</div>
          <a className="link" href={url} {...style(styles['link'])}>{externalLink}</a>
          <div className="close-button" onClick={removeNotification} {...style(styles['close-button'])}>x</div>
        </div>
      </div>
      
      // <div className="notification-component">
      //   <span className="container-for-text-icon" {...style(styles['container-for-text-icon'])}>
      //    <div className="icon-container" {...style(styles['icon-container'])}>
      //        <i className="material-icons" {...style(styles['material-icons'])}>{icon}</i></div>
      //          <div className="text-info-display" {...style(styles['text-info-display'])}>{textDisplay}</div></span>
      //          <span> </span>
      //          <a className="external-info" href={url} {...style(styles['external-info'])}>{externalLink}</a>
      //          <div className="close-display" onClick={removeNotification}>X</div>
      //      </div>   
    

          )
    }
}
  
export default withStreamlitConnection(NotificationBox)