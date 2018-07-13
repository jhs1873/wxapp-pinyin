//index.js
import zh from "../../utils/pinying.js"
Page({
  data: {
    // 导航字母
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'
    ],
    // 当前选择的导航字母
    selected: -1,
  },
  onLoad: function () {
    const storeList = [{
      name: '中国'
    }, {
      name: '厉害了我的国'
    }, {
      name: '测试下文字'
    }]
    for (const i of storeList) {
      i.pinyin = zh.makePy(i.name)[0]//这里取了首字母的拼音
    }
    this.setData({
      storeList: storeList,
      storeList_old: storeList
    })

  },
  // 选中字母
  tabLetter(e) {
    const index = e.currentTarget.dataset.index;
    const letter = this.data.letters[index]
    wx.showToast({
      title: letter,
      icon: 'none',
      duration: 500
    })
    let storeList = this.data.storeList_old
    let temp = []
    for (const i of storeList) {
      if (i.pinyin == letter) {
        temp.push(i)
      }
    }
    console.log(temp)
    this.setData({
      selected: index,
      storeList: temp
    })
    // 清除字母选中状态
    setTimeout(() => {
      this.setData({
        selected: -1
      })
    }, 500);
  },
})