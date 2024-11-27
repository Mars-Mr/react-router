/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      oversize150: '150% 150%'
    },
    minHeight: {
      '40px': '40px'
    },
    maxWidth: {
      '40px': '40px',
      '80px': '80px',
      '80%': '80%',
      '70%': '70%',
      '60%': '60%',
      '50%': '50%'
    },
    minWidth: {
      '40px': '40px',
      '60px': '60px',
      '80px': '80px'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      0.5: '0.5px'
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
      '7px': '7px',
      '8px': '8px',
      '9px': '9px',
      '10px': '10px',
      '11px': '11px',
      '12px': '12px'
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      3: '3 3 0%',
      4: '4 4 0%',
      5: '5 5 0%',
      6: '6 6 0%',
      7: '7 7 0%',
      1.8: '1.8 1.8 0%',
      1.5: '1.5 1.5 0%'
    },

    gradientColorStops: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      btn_from: '#FF9494',
      btn_middle: '#B780FF',
      btn_end: '#97E1FF',
      color_from1: '#008F61',
      color_to1: '#3BA7FF',
      color_from2: '#FFA51E',
      color_to2: '#FF5050',
      color_from3: '#1EB1FF',
      color_to3: '#8A38F5',
      color_from4: '#1EE1FF',
      color_to4: '#3AB6EC',
      color_from5: '#004C58',
      color_to5: '#005980',
      color_from6: '#BCE7FF',
      color_to6: '#F0F0F0',
      color_from7: '#0052CE',
      color_to7: '#43CAFF',
      color_from8: '#0f52fb',
      color_to8: '#316bfc',
      color_from9: 'rgba(0,0,0)',
      color_to9: 'rgba(0,0,0)',
      color_from_none: '',
      color_to_none: ''
    }),
    extend: {
      boxShadow: {
        'shadow-1': '0px 1px 10px 2px rgba(165,164,164,0.5)',
        'shadow-d3d3d3': '0px 1px 3px 1px #D3D3D3',
        'shadow-1D4ED8': '0px 0px 13px 11px #1D4ED8',
        'shadow-A21CAF': '0px 0px 13px 11px #A21CAF',
        'shadow-2563EB': '0px 0px 13px 11px #2563EB',
        'shadow-999999': '0px 0px 0.5px 0.5px #666666',
        'shadow-d3d3d3-row': '1px 0px 0px 0px #D3D3D3', //左右，上下，模糊度，扩散度，颜色
        'shadow-d3d3d3-bottom': '0px -1px 0.01px 0.1px #D3D3D3', //左右，上下，模糊度，扩散度，颜色
        'shadow-d3d3d3-top': '0px 1px 8px 0.1px #D3D3D3' //左右，上下，模糊度，扩散度，颜色
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17'
      },
      gridRow: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17'
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))',
        17: 'repeat(17, minmax(0, 1fr))',
        layout_root: '23px  minmax(0, 1fr)',
        layout_box: 'repeat(4, minmax(120px, 1fr))',

        layout_video: '120px 20px',
        layout_video_mobile: '340px 80px',
        layout_detail_mobile: 'minmax(0, 1fr) 90px',
        layout_mobile_music_box: 'minmax(0, 1fr) 70px',
        layout_painting_box: '50px minmax(0, 1fr)'
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        17: 'repeat(17, minmax(0, 1fr))',
        layout_dis_box: 'repeat(auto-fill, minmax(160px, 23%))',
        layout_dis_icon_box: 'repeat(auto-fill, minmax(120px, 15%))',
        layout_video_box: 'repeat(auto-fill, minmax(200px, 23%))',
        layout_flow_box: 'repeat(auto-fill, minmax(180px, 30%))',
        layout_mobile_root: '60px  minmax(0, 1fr) 60px',
        layout_browser_root: '220px  minmax(0, 1fr) 280px'
      },
      gridAutoColumns: {},
      gridAutoRows: {},
      backgroundImage: {
        'bottom-bg': "url('@/assets/bottom_bg.png')",
      },
      height: {
        550: '550px',
        77: '77px',
        '10px': '10px',
        '6px': '6px',
        '2px': '2px',
        '8px': '8px',
        '4px': '4px',
        '11px': '11px',
        '1h': '1px',
        490: '490px',
        339: '330px',
        549: '549px',
        485: '485px',
        445: '445px',
        354: '354px',
        402: '402px',
        541: '541px',
        231: '231px',
        389: '389px',
        222: '222px',
        200: '200px',
        379: '379px',
        172: '172px',
        600: '600px',
        823: '823px',
        884: '884px',
        700: '700px',
        1200: '1200px',
        '100vh': '100vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '80vh': '80vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '10vh': '10vh',
        '5vh': '5vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '80%': '80%',
        '90%': '90%',
        '93vh': '93vh',
        '92vh': '92vh'
      },
      width: {
        '1w': '1px',
        151: '151px',
        180: '180px',
        200: '200px',
        250: '250px',
        256: '250px',
        370: '370px',
        706: '706px',
        532: '532px',
        400: '400px',
        480: '480px',
        737: '737px',
        600: '600px',
        836: '836px',
        800: '800px',
        900: '900px',
        384: '384px',
        775: '775px',
        1100: '1100px',
        1200: '1200px',
        '100vw': '100vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '50%': '50%',
        '30%': '30%',
        '40%': '40%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '20vh': '20vh',
        '30vh': '30vh',
        '80vh': '80vh'
      },
      textColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        color_BFBFBF: '#BFBFBF',
        color_F3D958: '#F3D958',
        color_228EE7: '#228EE7',
        color_666666: '#666666',
        color_333333: '#333333',
        color_3662EC: '#3662EC',
        color_999999: '#999999',
        color_00B578: '#00B578',
        color_3562FF: '#3562FF',
        color_ff4949: '#ff4949',
        color_e12f2b: '#e12f2b',
        color_324056: '#324056',
        color_2BA0D3: '#2BA0D3',
        color_00CAEF: '#00CAEF',
        color_C1602E: '#C1602E',
        color_FD5411: '#FD5411',
        color_BA8459: '#BA8459',
        color_007aff: '#007aff',
        color_42b983: '#42b983',
        color_409eff: '#409eff',
        color_9e9e9e: '#9e9e9e',
        color_2979ff: '#2979ff',
        color_0f52fb: '#0f52fb'
      },
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '10%': '10%',
        '5%': '5%',
        25: '25px',
        '8vh': '8vh',
        '15%': '15%',
        '4vh': '4vh',
        '30vh': '30vh',
        '110px': '110px',
        '100px': '100px',
        '98px': '98px'
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '5%': '5%',
        '4vh': '4vh',
        '8vh': '8vh',
        '30vh': '30vh',
        '10%': '10%',
        '15%': '15%'
      },
      fontSize: {
        '16px': '16px',
        '8px': '8px',
        '11px': '11px'
      },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        110: '1.10'
      },
      borderColor: {
        'color-d1d1d1': '#d1d1d1',
        'color-3662EC': '#3662EC'
      },
      colors: {
        'black_0.7': 'rgba(0,0,0,0.23)'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      color_182135: '#182135',
      color_282828: '#282828',
      color_1F2937: '#1F2937',
      color_b6b6b6: '#b6b6b6',
      color_343434: '#343434',
      color_081127: '#081127',
      color_4053e3: '#4053e3',
      color_B8DAF0: '#B8DAF0',
      color_A21CAF: '#A21CAF',
      color_2563EB: '#2563EB',
      color_1D4ED8: '#1D4ED8',
      color_F6F6F6: '#F6F6F6',
      color_666666: '#666666',
      color_999999: '#999999',
      color_eef2f6: '#eef2f6',
      color_3562FF: '#3562FF',
      color_e4e7ed: '#e4e7ed',
      color_eff2f6: '#eff2f6',
      color_0E0C0C: '#0E0C0C',
      color_2979ff: '#2979ff',
      color_3687B1: '#3687B1',
      color_f2f2f2: '#f2f2f2',
      color_f0f0f0: '#f0f0f0',
      color_111827: '#111827',
      color_c1c1c1: '#c1c1c1',
      color_2979ff: '#2979ff',
      color_dcdfe6: '#dcdfe6',
      color_3eaf7c: '#3eaf7c',
      'color_black_0.23': 'rgba(0,0,0,0.23)',
      'color_black_0.6': 'rgba(0,0,0,0.6)',
      'color_white_0.6': 'rgba(249,249,252,1)',
      'color_white_0.5': 'rgba(255,255,255,0.5)',
      color_blue_1: 'rgba(9,157,253,1)',
      color_black_50: 'rgba(0,0,0,0.5)',
      color_black_60: 'rgba(0,0,0,0.6)',
      color_black_70: 'rgba(0,0,0,0.7)',
      color_black_80: 'rgba(0,0,0,0.8)',
      color_black_90: 'rgba(0,0,0,0.9)',
      color_white_30: 'rgba(255,255,255,0.3)',
      color_white_40: 'rgba(255,255,255,0.4)',
      color_white_50: 'rgba(255,255,255,0.5)',
      color_white_60: 'rgba(255,255,255,0.6)',
      color_white_70: 'rgba(255,255,255,0.7)',
      color_white_80: 'rgba(255,255,255,0.8)',
      color_white_90: 'rgba(255,255,255,0.9)'
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
};