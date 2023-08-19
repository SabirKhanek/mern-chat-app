import { Outlet } from 'react-router-dom'

export function AuthUi() {
    return (
        <div className="w-full h-full bg-gradient-to-tl from-yellow-300 to-amber-400 backdrop-blur-sm justify-center items-center inline-flex">
            <div className="basis-1/4 translate-x-1 bg-[url('/auth-cover.jpg')] bg-center bg-cover h-[650px] rounded-l-lg shrink-0 grow-0 hidden lg:block">

            </div>
            <div className='w-full z-10 flex items-center justify-center xs:block h-full xs:w-[420px] md:w-[500px] lg:w-[550px] xs:h-[650px] bg-white xs:rounded-lg p-5 md:p-7 lg:p-10 overflow-y-auto scrollbar'>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}