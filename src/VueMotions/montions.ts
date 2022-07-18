export const motion1 = {
    initial:{
        x:0
    },
    enter:{
        x:-4,
        transition:{
            duration:3000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const motion2 = {
    initial:{
        y:0,
    },
    enter:{
        y:3,
        transition:{
            duration:3000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const motion3 = {
    initial:{x:0},
    enter:{
        x:4,
        transition:{
            duration:3000,
            repeat: Infinity,
            repeatType: 'reverse',
        }  
    },
}

export const glowText = {
      initial:{'text-shadow':'0 0 2px #fff'},
      enter:{
       'text-shadow':'0 0 8px #fff',
        transition:{
            duration:4000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
      }
}

export const slideLeft = {
    initial:{x:0},
    enter:{
        x:4,
        transition:{
            duration:2000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const slideRight = {
    initial:{x:0},
    enter:{
        x:-4,
        transition:{
            duration:2000,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}