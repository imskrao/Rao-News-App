import React from 'react'
import Classes from './footer.module.css'
// export default function Footer() {


//     let currentYear = new Date();

//     return (
//         <div className={Classes.footer}>
//             <p>Copyright &copy; 2019 Rao</p>
//             {currentYear.getFullYear()}
//         </div>
//     )
// }

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentYear: new Date().getFullYear()
        }
    }

    render() {
        return (
            <div className={Classes.footer}>
                {`copyright © ${this.state.currentYear} Rao`}
            </div>
        )
    }
}

export default Footer;
