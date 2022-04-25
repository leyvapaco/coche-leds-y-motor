input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.motorStop(maqueen.Motors.All)
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
