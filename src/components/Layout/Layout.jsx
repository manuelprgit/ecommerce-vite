const Layout = ({ children }) => {
    return (
        <div className="flex flex-col mt-32 items-center max-w-screen-lg auto mx-auto p-4 rounded-lg">
            {children}
        </div>
    )
}

export { Layout }