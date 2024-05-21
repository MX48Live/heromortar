let mortarImgPath = '/img/mortar/'
let customerImgPath = '/img/customer/'

export const state = () => ({
  product: {
    mortarList: [
      { id: 1, alias: 'hero-h-111', code: 'H-111', img: mortarImgPath + 'mortar-1.png', color: '#C94843', name: 'ปูนฉาบคอนกรีต' },
      { id: 12, alias: 'hero-h-111p', code: 'H-111P', img: mortarImgPath + 'mortar-111p.png', color: '#C94843', name: 'ปูนอุดเพลทและรอยต่อผนังคอนกรีต' },
      { id: 2, alias: 'hero-h-112', code: 'H-112', img: mortarImgPath + 'mortar-2.png', color: '#EEBB2E', name: 'ปูนแต่งผิวชนิดมีทราย' },
      { id: 3, alias: 'hero-h-112-base-coat', code: 'H-112', img: mortarImgPath + 'mortar-3.png', color: '#FFB538', name: 'Base Coat' },
      { id: 4, alias: 'hero-h-113', code: 'H-113', img: mortarImgPath + 'mortar-4.png', color: '#00A650', name: 'ปูนกาวติดกระเบื้อง' },
      { id: 13, alias: 'hero-h-113p', code: 'H-113P', img: mortarImgPath + 'mortar-113p.png', color: '#00A650', name: 'ปูนกาวสำหรับปูทับกระเบื้องเก่า' },
      { id: 5, alias: 'hero-h-114', code: 'H-114', img: mortarImgPath + 'mortar-5.png', color: '#A64686', name: 'ปูนแต่งผิวชนิดไม่มีทราย – สีเทา' },
      { id: 6, alias: 'hero-h-115', code: 'H-115', img: mortarImgPath + 'mortar-6.png', color: '#00ADF3', name: 'ปูนแต่งผิวชนิดไม่มีทราย - สีขาว' },
      { id: 7, alias: 'hero-h-116', code: 'H-116', img: mortarImgPath + 'mortar-7.png', color: '#FE9963', name: 'ปูนก่ออิฐมวลเบา' },
      { id: 8, alias: 'hero-h-201', code: 'H-201', img: mortarImgPath + 'mortar-8.png', color: '#F38AB9', name: 'ปูนเทปรับระดับพื้น (บาง)' },
      { id: 9, alias: 'hero-h-202', code: 'H-202', img: mortarImgPath + 'mortar-9.png', color: '#3F3F3F', name: 'ปูนทรายชนิดไม่หดตัว' },
      { id: 12, alias: 'hero-fn-205', code: 'FN-205', img: mortarImgPath + 'mortar-12.png', color: '#451E15', name: 'ปูนแต่งพื้นผิวขัดมัน' },
      { id: 12, alias: 'hero-h-7000', code: 'H-7000', img: mortarImgPath + 'mortar-h-7000.png', color: '#5C2E91', name: 'ปูนซ่อมโครงสร้าง' },
      { id: 10, alias: 'hero-h-301', code: 'H-301', img: mortarImgPath + 'mortar-10.png', color: '#567FC9', name: 'ปูนผสมน้ำยาประสานรอยร้าว' },
      { id: 11, alias: 'hero-h-501-liquid', code: 'H-501', img: mortarImgPath + 'mortar-11.png', color: '#565771', name: 'น้ำยาประสานรอยร้าว' },
      { id: 14, alias: 'hero-h-1000', code: 'H-1000', img: mortarImgPath + 'mortar-1000.png', color: '#565771', name: 'ปูนแต่งผิวไม่มีทราย-ขาว (ภายใน)' },
    ],
    customerList: [
      {id: 1, img: customerImgPath + '1.jpg', name: 'Life Home ซอย 12'},
      {id: 2, img: customerImgPath + '2.jpg', name: 'Life in the garden บ้านฉาง'},
      {id: 3, img: customerImgPath + '3.jpg', name: 'คอนโดพาร์เอ็กโซ เกษตร-นวมินทร์'},
      {id: 4, img: customerImgPath + '4.jpg', name: 'พลัมคอนโด รามคำแหง สเตชั่น'},
      {id: 5, img: customerImgPath + '5.jpg', name: 'พลัมคอนโดแจ้งวัฒนะ สเตชั่น'},
      {id: 6, img: customerImgPath + '6.jpg', name: 'แฟมิลี่ ซิตี้ พานทอง 2'},
      {id: 7, img: customerImgPath + '7.jpg', name: 'แฟมิลี่ ซิตี้ สุขประยูร'},
      {id: 8, img: customerImgPath + '8.jpg', name: 'รีเจ้นท์ โฮม บางซ่อน'},
      {id: 9, img: customerImgPath + '9.jpg', name: 'ไลฟ์ ซิตี้ ปาร์ค'},
      {id: 10, img: customerImgPath + '10.jpg', name: 'ไอลีฟพาร์ค แสมดำ พระราม 2'},
      {id: 11, img: customerImgPath + '11.jpg', name: 'ไอลีฟพาร์ค รังสิตคลอง 4'},
      {id: 12, img: customerImgPath + '12.jpg', name: 'พลัมคอนโด เซนทรัล สเตชั่น บางใหญ่'},
      {id: 13, img: customerImgPath + '13.jpg', name: 'พลัมคอนโด ปิ่นเกล้า สเตชั่น'},
      {id: 14, img: customerImgPath + '14.jpg', name: 'The capital ราชปรารภ-วิภา คอนโดมิเนียม'}
    ]
  }
})

export const getters = {
  mortarList: state => {
    return state.product.mortarList
  },
  customerList: state => {
    return state.product.customerList
  }
}

export const mutations = {
}

export const actions = {
}
