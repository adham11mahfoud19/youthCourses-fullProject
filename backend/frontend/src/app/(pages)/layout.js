'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(pages)/Navigation'
import Loading from '@/app/(pages)/Loading'

const AppLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <div >
            {/* <Navigation user={"user"} /> */}

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
