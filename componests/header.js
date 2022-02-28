import Link from "next/link"

const style = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
}

function Header() {
    return (
        <div>
            <Link href="/new-index">
                <a style={style}>Home</a>
            </Link>
            <Link href="/new-about">
                <a style={style}>About</a>
            </Link>
        </div>
    )
}

export default Header