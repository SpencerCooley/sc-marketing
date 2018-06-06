import Typography from "typography";
import doelgerTheme from 'typography-theme-doelger'

doelgerTheme.headerWeight = '200'
doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color:'#27aae1',
    backgroundImage:'none'
  }
});

const typography = new Typography(doelgerTheme)



export default typography;
