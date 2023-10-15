import './cardlist.css'

export default function CardList (){
    return <Card/>
}

function Card(){
    return (
        <div className='card'>
            <p>Name: John</p>
            <p>Surname: Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Age: 30</p>
        </div>
    )
}

