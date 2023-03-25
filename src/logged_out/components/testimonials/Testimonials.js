import React, { Component } from "react";
import './styles.css'

export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>MUDANZA ECONOMICA BARCELONA BADALONA Y PROVINCIA</h2>
            <p>Nuestra empresa garantiza una adecuada mudanza ,tanto en toda Catalunya así como nacionales e internacionales, de mayor o menor envergadura. Asegurarnos del extremo cuidado de la integridad de los enseres de nuestros clientes , la puntualidad y la seriedad de nuestro trabajo nos hace diferentes al resto</p>
            {/*Create a div with two columns, each has a title and a paragraph */}



            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', textAlign: 'left' }}>
              <div style={{ width: '50%', backgroundColor: '#000033' }}>
                <div class="col-sm-4" style={{ margin: '10px', color: 'whitesmoke' }}>
                  <div>
                    <h3 style={{ color: 'red' }}>MUDANZA ECONOMICA BARCELONA BADALONA, POR QUÉ ELEGIRNOS</h3>
                  </div>
                  <ul>
                    <li>·Muy económico (precios sin competencia).</li>
                    <li>·Profesionales (personal experto en mudanzas).</li>
                    <li>·Montaje y Desmontaje.</li>
                    <li>·Calidad y seguridad</li>
                    <li>·Presupuesto gratuito a domicilio</li>
                    <li>·Servicios a todas las provincias de España</li>
                    <li>·Expertos en mudanzas economias/baratas</li>
                  </ul>
                </div>
              </div>
              <div style={{ width: '50%', backgroundColor: '#330000', color: 'whitesmoke' }}>
                <div class="col-sm-4" style={{ margin: '10px' }}>
                  <h3 style={{ color: 'red' }}>ASTROMUDANZAS</h3>
                  <p>Pep Ventura, 08918 Badalona, Barcelona, Spain</p>
                  {/*Email link */}<h3 style={{ color: 'whitesmoke' }}>Email:</h3>
                  <a href="mailto:astromudanzas@gmail.com">
                    astromudanzas@gmail.com</a>
                  <h3 style={{ color: 'whitesmoke' }}>¡LLÁMANOS! <a href="tel:+34631786313">+34 631 78 63 13</a></h3>   </div>
              </div>
            </div>
            <br/>
            <h2>Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonial-box">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
