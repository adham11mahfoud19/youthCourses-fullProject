const Header = ({ title, user }) => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">

                <h2 className="font-semibold text-xl text-green-600 leading-tight">
                    {title}
                    {user?.name}
                </h2>
            </div>
        </header>
    )
}

export default Header
