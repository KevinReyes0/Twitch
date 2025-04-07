import logo from "../assets/img/FC_Barcelona.png"

export const Logo = ({text}) => {
    return(
        <div className="auth-from-logo-container">
            <img src={logo} alt="Escudo fc barcelona"/>
            <span>{text}</span>
        </div>
    )
}