import './Components.css'

export function Panel({children} : {children: React.ReactNode}){
    return (
        <div className="Panel">
            {children}
        </div>        
    )
}