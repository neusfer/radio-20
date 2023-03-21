input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola que tal Sara y Keira?")
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Estamos genial!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 191)
