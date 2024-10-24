// Send Increment Command
input.onButtonPressed(Button.A, function () {
    radio.sendString("INC!")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "INC!") {
        counter += 1
    }
})
// Toggle Device Type
input.onButtonPressed(Button.B, function () {
    if (true) {
    	
    } else {
    	
    }
})
// Show Device Type
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
radio.setGroup(1)
let counter = 0
let deviceType = ""
basic.forever(function () {
    basic.showNumber(0)
})
