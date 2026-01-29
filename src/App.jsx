import { Header } from './Header'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { Script } from './Script'

export const App = () => {

    return (
        <>
            <Header></Header>
            <DesktopMenu></DesktopMenu>
            <MobileMenu></MobileMenu>
            <Script module={true} strategy={'afterInteractive'} src={'/assets/main.js'}></Script>
        </>
    )
}