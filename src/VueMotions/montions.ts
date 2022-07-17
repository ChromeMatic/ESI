export const motion1 = {
    initial:{
        y:0,
        x:0
    },
    enter:{
        y:-3,x:3,
        transition:{
            duration:750,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const motion2 = {
    initial:{
        y:0,
        x:0
    },
    enter:{
        y:3,x:-3,
        transition:{
            duration:750,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const motion3 = {
    initial:{
        y:0,
        x:0
    },
    enter:{
        y:-4,x:2,
        transition:{
            duration:750,
            repeat: Infinity,
            repeatType: 'reverse',
        }  
    },
}

export const glowText = {
      initial:{'text-shadow':'0 0 1px #2ecc71'},
      enter:{
       'text-shadow':'0 0 16px #2ecc71',
        transition:{
            duration:800,
            repeat: Infinity,
            repeatType: 'reverse',
        }
      }
}