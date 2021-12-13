export function mockLogin() {

    return new Promise((info) => {
        setTimeout(() => {
            info({
                token: '420',
                name: 'Diogenes Sinope',
                email: 'diogenes@serratec.com'
            })
        }, 3000)
    })

}