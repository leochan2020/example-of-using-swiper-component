// components/end.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNextOne(e){
      this.triggerEvent('next', e);
    },
    onReplay(e){
      console.log('onReplay', e);
      this.triggerEvent('replay', e);
    }
  }
})
