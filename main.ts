basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showNumber(679758567586578)
    basic.showString("Hello!")
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        . # # # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
