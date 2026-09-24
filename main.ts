input.onButtonPressed(Button.AB, function () {
    timer_to = randint(5, 10)
    basic.showIcon(IconNames.Chessboard)
    while (timer_to > 0) {
        timer_to += -1
        basic.pause(1000)
        led.toggle(2, 2)
    }
    basic.showIcon(IconNames.Sad)
})
let timer_to = 0
basic.showString("Hot potato")
