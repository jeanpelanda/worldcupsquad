import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://cursos.alura.com.br/user/jeanpelanda" target="_blank" rel="noreferrer">
                            <img src="/images/alura.svg" alt="Alura" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jeanpelanda" target="_blank" rel="noreferrer">
                            <img src="/images/github.svg" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jeanpelanda/" target="_blank" rel="noreferrer">
                            <img src="/images/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo" />
            </section>
            <section>
                <p>
                    developed by <a href='https://www.linkedin.com/in/jeanpelanda/' target='_blank' rel="noreferrer">Jean Pelanda</a>.
                </p>
            </section>
        </footer>
    )
}

export default Footer