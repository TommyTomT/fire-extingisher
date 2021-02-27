controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    water = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 8 8 f . . . . . . 
        . . . . . f 6 9 8 8 f . . . . . 
        . . . . f 8 9 8 8 8 8 f . . . . 
        . . . f 8 6 9 8 8 1 8 8 f . . . 
        . . . f 8 9 6 8 1 8 8 8 f . . . 
        . . . . f 8 6 9 6 8 8 f . . . . 
        . . . . . f 8 8 8 8 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, fireExtingisher, 50, 0)
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Fire: Sprite = null
let water: Sprite = null
let fireExtingisher: Sprite = null
scene.setBackgroundColor(7)
fireExtingisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . d d d . . . . . . 
    . . . . . f 4 4 4 d d . . . . . 
    . . . . f . . 2 2 . . d . . . . 
    . . . f . . 2 2 2 2 . . . . . . 
    . . . f . 2 2 2 2 2 2 . . . . . 
    . . . f . 2 2 2 2 2 2 . . . . . 
    . . . f . 2 2 2 2 2 2 . . . . . 
    . . . 5 f 2 2 2 2 2 2 . . . . . 
    . 5 5 5 . 2 2 2 2 2 2 . . . . . 
    . 5 5 5 d 2 2 2 2 2 2 . . . . . 
    . . 5 5 5 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(fireExtingisher, 0, 100)
fireExtingisher.x = 10
fireExtingisher.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(500, function () {
    Fire = sprites.create(img`
        . . . . . . . 2 . . . . 4 . . . 
        . 4 . . . 4 . 4 4 4 . 2 . . 4 . 
        . . 2 . . . 4 5 5 4 4 4 . 2 . . 
        . . . 3 2 3 3 4 4 4 4 4 4 . . 4 
        4 . . 3 3 3 3 2 2 2 1 1 4 4 2 . 
        . 2 3 3 3 3 3 2 2 2 1 1 5 4 . 4 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        4 4 3 3 3 2 2 2 4 4 4 4 5 4 4 2 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        2 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . 2 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . 2 . 4 2 2 2 2 2 2 2 2 4 . 2 . 
        4 . . . 4 4 2 2 2 2 4 4 . 2 . 4 
        . . . 2 . . 4 4 4 4 . . 2 . 4 . 
        . . 4 . . 2 . . . . 2 . . 4 . . 
        `, SpriteKind.Enemy)
    Fire.x = 160
    Fire.y = randint(0, 120)
    Fire.setVelocity(-50, 0)
})
