import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Btn from '../../../components/Btn/Btn.jsx';

import './FormDoador.css';

export default function FormDoador({ isNew = false, onSubmitForm }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = () => {
        onSubmitForm(formData);
    };

    return (
        <Form className='form-doador'>
            <Row>
                <Form.Group as={Col} xl="6" className='mb-4'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        name="nome"
                        placeholder='"Marcos Silva"'
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} xl="6" className='mb-4'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        placeholder='"marcos@email.com"'
                        type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Row>

            <Row>
                <div className='d-flex justify-content-center mt-4'>
                    {isNew ? (
                        <Btn
                            text={"Criar Doador"}
                            size={"lg"}
                            onClick={handleFormSubmit}
                        />
                    ) : (
                        <>
                            <div className='p-2'>
                                <Btn text={"Deletar"} size={"lg"} />
                            </div>
                            <div className='p-2'>
                                <Btn text={"Atualizar"} size={"lg"} onClick={handleFormSubmit} />
                            </div>
                        </>
                    )}
                </div>
            </Row>
        </Form>
    );
}
