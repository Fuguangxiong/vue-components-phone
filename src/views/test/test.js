const images = [
    '/static/images/morning.png',
    '/static/images/avatar.jpg',
    '/static/images/image.png',
    '/static/images/qrcode.png'
]

const canvas = document.createElement('canvas')
canvas.width = 480
canvas.height = 600
canvas.setAttribute('style', `width: 240px; height: 300px;`)
const context = canvas.getContext('2d')

const left = 30
let top = 0

function loadImage () {
    return images.map(item => {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.setAttribute('crossOrigin', 'anonymous')

            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }

            img.src = item
        })
    })
}

// function drawBackground () {
//     context.clearRect(0, 0, 480, 600)
// }

function drawGreeting (image) {
    context.drawImage(image, left, top, 30, 30)
}

function drawDays () {
    context.save()

    context.fillStyle = '#999'
    context.font = '20px sans-serif'
    context.fillText('我在静好书院坚持读书', left, top)

    context.restore()
    // top += 20
}

function drawAvatar (image) {
    const right = 50
    const r = image.width / 2
    const x = 480 - image.width - right
    const y = top
    context.save()

    context.arc(x + r, y + r, r, 0, Math.PI * 2)
    context.clip()
    context.drawImage(image, x, y, r * 2, r * 2)

    context.restore()
    top += image.height
}

function drawImage (image) {
    top += 20
    context.drawImage(image, left, top, 400, 400)
    top += 400
}

function drawDate () {
    top += 20
    context.save()

    context.fillStyle = '#000'
    context.font = '40px sans-serif'
    context.fillText('12 日', 0, top)

    context.restore()
    // top += 20
}

function drawTips () {
    top += 20
    context.save()

    context.font = '14px sans-serif'
    context.fillStyle = '#999'
    context.fillText('识别二维码和我一起读书', left, top)

    context.restore()
    // top += 20
}

export default () => {
    return new Promise((resolve, reject) => {
        Promise.all(loadImage())
            .then(images => {
                // drawBackground()
                top += 10
                drawGreeting(images[0])
                top += 30
                top += 20
                drawDays()
                drawAvatar(images[1])
                drawImage(images[2])
                drawDate()
                drawTips()

                resolve(canvas)
            })
            .catch(err => {
                console.error(err)

                reject(err)
            })
    })
}
