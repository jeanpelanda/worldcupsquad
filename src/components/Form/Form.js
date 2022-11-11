import './Form.css'
import TextField from '../TextField/TextField';
import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const Form = (props) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [group, setGroup] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        props.onRegisterPlayer({
            name, role, image, group
        })
        setName('')
        setRole('')
        setImage('')
        setGroup('')
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <h2>Se você fosse o técnico da seleção brasileira,<br /> qual seria a sua convocação?</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite o nome"
                    required={true}
                    value={name}
                    setValue={value => setName(value)}
                />
                <TextField
                    label="Time"
                    placeholder="Digite o time"
                    required={true}
                    value={role}
                    setValue={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    required={true}
                    value={image}
                    setValue={value => setImage(value)}
                />
                <Dropdown
                    itens={props.positions}
                    placeholder="Escolha a posição"
                    label="Posição"
                    required={true}
                    value={group}
                    setValue={value => setGroup(value)}
                />
                <Button>
                    Convocar
                </Button>
            </form>
        </section>
    )
}

export default Form