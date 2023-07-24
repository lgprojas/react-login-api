
import { Link } from "react-router-dom"

const DefaultLayout = ({ children }) => {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>

        <main>{children}</main>
        </>
    )
}

export default DefaultLayout