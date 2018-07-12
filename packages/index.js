import Toast from './toast/toast.js'
import Message from './message/message.js'
import Loading from './loading/loading.js'
import Popup from './popup/popup.js'
import Actionsheet from './actionsheet/actionsheet.js'

import Lazyload from './lazyload/lazyload.js'
import InfiniteScroll from './infinite-scroll/infinite-scroll.js'
import Anchor from './anchor/anchor.js'
import SmartScroll from './smart-scroll/smart-scroll.js'
import Sticky from './sticky/sticky.js'
import Loadmore from './loadmore/loadmore.js'
import ImageCombine from './image-combine/image-combine.js'

import Cell from './cell/cell.js'
import Field from './field/field.js'
import Radio from './radio/radio.js'
import RadioItem from './radio-item/radio-item.js'
import Checkbox from './checkbox/checkbox.js'
import CheckboxItem from './checkbox-item/checkbox-item.js'
import Button from './button/button.js'
import Panel from './panel/panel.js'
import PanelItem from './panel-item/panel-item.js'
import Divider from './divider/divider.js'
import Switch from './switch/switch.js'
import Badge from './badge/badge.js'
import Dialog from './dialog/dialog.js'
import Tab from './tab/tab.js'
import TabItem from './tab-item/tab-item.js'
import Calendar from './calendar/calendar.js'
import Picker from './picker/picker.js'
import PickerItem from './picker-item/picker-item.js'
import Datepicker from './datepicker/datepicker.js'
import Row from './row/row.js'
import Col from './row-item/row-item.js'
import Card from './card/card.js'
import Header from './header/header.js'
import ViewBox from './view-box/view-box.js'
import Icon from './icon/icon'
import Carousel from './carousel/carousel.js'
import CarouselItem from './carousel-item/carousel-item.js'

const install = function (Vue, opts = {}) {
    Vue.prototype.$toast = Toast
    Vue.prototype.$message = Message
    Vue.prototype.$loading = Loading
    Vue.prototype.$actionsheet = Actionsheet

    Vue.directive(Lazyload.name, Lazyload)
    Vue.directive('infiniteScroll', InfiniteScroll)
    Vue.directive('anchor', Anchor)
    Vue.directive('smartScroll', SmartScroll)
    Vue.directive('sticky', Sticky)
    Vue.directive(Loadmore.name, Loadmore)
    Vue.directive(ImageCombine.name, ImageCombine)

    Vue.component(Cell.name, Cell)
    Vue.component(Field.name, Field)
    Vue.component(Radio.name, Radio)
    Vue.component(RadioItem.name, RadioItem)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(CheckboxItem.name, CheckboxItem)
    Vue.component(Popup.name, Popup)
    Vue.component(Button.name, Button)
    Vue.component(Panel.name, Panel)
    Vue.component(PanelItem.name, PanelItem)
    Vue.component(Divider.name, Divider)
    Vue.component(Switch.name, Switch)
    Vue.component(Badge.name, Badge)
    Vue.component(Dialog.name, Dialog)
    Vue.component(Tab.name, Tab)
    Vue.component(TabItem.name, TabItem)
    Vue.component(Calendar.name, Calendar)
    Vue.component(Picker.name, Picker)
    Vue.component(PickerItem.name, PickerItem)
    Vue.component(Datepicker.name, Datepicker)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Card.name, Card)
    Vue.component(Header.name, Header)
    Vue.component(ViewBox.name, ViewBox)
    Vue.component(Icon.name, Icon)
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
}

export default {
    install
}
