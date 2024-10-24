input.onButtonPressed(Button.A, function () {
    radio.sendString("INC!")
    basic.pause(2000)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "INC!") {
        counter += 1
    }
})
// Toggle Device Type
input.onButtonPressed(Button.B, function () {
    if (deviceType == "client") {
        deviceType = "server"
    } else {
        deviceType = "client"
    }
    counter = 0
})
input.onGesture(Gesture.Shake, function () {
    counter = 0
})
let deviceType = ""
let counter = 0
radio.setGroup(1)
counter = 0
deviceType = "client"
basic.forever(function () {
    if (deviceType == "client") {
        basic.showString("C")
    } else {
        basic.showNumber(counter)
    }
})
