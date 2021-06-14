radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 25) {
        politie.set(LedSpriteProperty.X, receivedNumber / 5)
        politie.set(LedSpriteProperty.X, receivedNumber % 5)
    } else if (receivedNumber == 30) {
        basic.showString("Jij wint!")
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.A, function () {
    boef.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    boef.move(1)
    radio.sendNumber(boef.get(LedSpriteProperty.X) + boef.get(LedSpriteProperty.Y) * 5)
})
input.onButtonPressed(Button.B, function () {
    boef.turn(Direction.Right, 90)
})
let politie: game.LedSprite = null
let boef: game.LedSprite = null
radio.setGroup(1)
boef = game.createSprite(0, 0)
politie = game.createSprite(4, 4)
