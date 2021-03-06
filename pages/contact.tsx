import { FC } from 'react';
import Layout from '../components/layout';
import Form from '../components/form';
import Input from '../components/form/input';
import Button from '../components/button';

const Contact: FC = () => {
  return (
    <Layout title="Capitaliza - Contacta con nosotros">
      <section className="contact__wrapper">
        <h1>CONTACTAR</h1>
        <Form method="POST" action="https://formspree.io/xpzyoybw">
          <div className="form-group">
            <label htmlFor="nombre">Nombre de pila</label>
            <Input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Elena"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <Input
              type="text"
              name="apellidos"
              id="apellidos"
              placeholder="Hernández"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="elena.hernandez@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="asunto">Tema del mensaje</label>
            <Input
              type="text"
              name="asunto"
              id="asunto"
              placeholder="Sobre qué nos contactas?"
              required
            />
          </div>
          <div className="form-group">
            <label style={{ alignSelf: 'flex-start' }} htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              placeholder="En qué te podemos ayudar?"
              id="mensaje"
              cols={30}
              rows={6}
            ></textarea>
          </div>
          <Button btnType="submit" primary>
            CONTACTAR
          </Button>
        </Form>
      </section>
    </Layout>
  );
};

export default Contact;
