import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Main,
  Popover,
  Input,
  Avatar,
  Carousel,
  CarouselItem,
  Autocomplete,
  Tabs,
  TabPane,
  Divider,
  Collapse,
  CollapseItem,
  RadioGroup,
  RadioButton,
  Message,
  Radio,
  Badge,
  Backtop,
  Pagination,
  Tooltip,
  Upload,
  Progress,
  Row,
  Col,
  Form,
  FormItem,
  Cascader,
  Switch,
  Tag,
  Select,
  Option
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Autocomplete)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Divider)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(Badge)
Vue.use(Backtop)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Cascader)
Vue.use(Switch)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Option)

// 需要全局挂载 挂载到Vue的原型上
Vue.prototype.$message = Message