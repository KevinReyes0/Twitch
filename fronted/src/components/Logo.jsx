import logo from "../assets/img/FC_Barcelona.png"

export const Logo = ({text}) => {
    return(
        <div className="auth-from-logo-containe">
            <img src={logo} alt="Escudo fc barcelona" whidth="150px" height="150px"/>
            <span>{text}</span>
        </div>
    )
}