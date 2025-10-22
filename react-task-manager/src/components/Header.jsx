export default function Header(){
    return(
        <header className="bg-blue-600 text-white border-b shadow-sm p-4 flex items-center justify-center">
            <div className="mx-auto max-w-3xl p-4 flex-justify">
                <h1 className="text-xl font-bold ">React Task Manager</h1>
                <span className="text-slate-600 text-sm">Your one-stop solution for task management</span>
            </div>
        </header>
    )
}