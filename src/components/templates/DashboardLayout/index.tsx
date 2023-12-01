import Sidebar from '../../organisms/Sidebar/index';

const DashboardLayout = ({ children }: any) => {
    return (
        <div>
            <div className="flex">
                <div className=' text-white font-bold text-lg leading-7 sticky top-0 w-99 h-screen px-8 py-16 border-r-[1px] border-gray-200'>
                    <Sidebar />
                </div>

                <div className="grow bg-gray-100">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DashboardLayout