let tilt = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
basic.forever(function () {
    tilt = input.acceleration(Dimension.X)
    if (tilt < -200) {
        basic.showString("L")
    } else if (tilt < 1000) {
        basic.showString("R")
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
