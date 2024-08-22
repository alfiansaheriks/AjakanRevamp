import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        primary: colors.green
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize:{
        '20' : '20px',
        '24' : '24px',
        '40' : '40px',
        '48' : '48px',
        '16' : '16px',
      },
      flex:{
        '0' : '0 0 100%',
      },
      blur:{
        '80' : '80px',
      },
    }
  }
}
