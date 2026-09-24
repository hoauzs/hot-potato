let timer_to = 0
input.onButtonPressed(Button.AB, function () {
    timer_to = randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    while (timer_to > 0) {
        timer_to += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Sad)
})
