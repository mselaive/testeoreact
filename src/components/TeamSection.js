import React from 'react';
import FotoMatias from './assets/img/team/matias.png';
import FotoMax from './assets/img/team/max.png';
import FotoCarlos from './assets/img/team/carlos.png';

function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container section-title" data-aos="fade-up">
        <h2>Choripan-HTML</h2>
        <p>Somos 3 estudiantes de Ingeniería Civil Informática de la Universidad Adolfo Ibáñez, con la mayor disposición para aprender sobre este ramo durante este semestre. Buscamos reforzar lo que se estudió anteriormente en Introducción a la Ingeniería.</p>
        <p>Para este semestre, nuestro objetivo es comprender completamente todo lo que se enseñe, adquiriendo experiencia en el desarrollo tanto del front-end como del back-end en el ámbito del desarrollo web. Tenemos altas expectativas respecto al ramo y estamos muy motivados en este tema.</p>
      </div>
      <div className="container">
        <div className="row gy-5">
          {/* Team Member 1 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src={FotoMatias} className="img-fluid" alt="" />
              <div className="social">
                <a href="mailto:mselaive@alumnos.uai.cl"><i className="bi bi-envelope"></i></a>
                <a href="https://www.instagram.com/matiasselaive/"><i className="bi bi-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=974492622"><i className="bi bi-phone"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Matias Selaive</h4>
              <span>Ingeniería Civil Informática, tercer año</span>
              <p>Alguno de mis pasatiempos en estos momentos son:</p>
              <ul>
                <li>Ver Series
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv" width="19" height="19" viewBox="0 0 24 18" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M16 3l-4 4l-4 -4" />
                  </svg>
                </li>
                <li>
                      Hacer deportes
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-run" width="19" height="19" viewBox="0 0 24 18" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M4 17l5 1l.75 -1.5" />
                          <path d="M15 21l0 -4l-4 -3l1 -6" />
                          <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                      </svg>
                  </li>
                  <li>
                      Programar
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-visual-studio" width="19" height="19" viewBox="0 0 24 17" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
                      </svg>
                  </li>
                  <li>
                      Videojuegos
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple-arcade" width="20" height="20" viewBox="0 0 24 19.5" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
                          <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
                          <path d="M12 7l0 6" />
                      </svg>
                  </li>
                  <li>
                      Ver Streamings
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitch" width="19" height="19" viewBox="0 0 24 19" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" />
                          <path d="M16 8l0 4" />
                          <path d="M12 8l0 4" />
                      </svg>
                  </li> 
              </ul>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
            {/* Contenido similar al Team Member 1 */}
            <div className="member-img">
              <img src={FotoMax} className="img-fluid" alt="" />
              <div className="social">
                <a href="mailto:mselaive@alumnos.uai.cl"><i className="bi bi-envelope"></i></a>
                <a href="https://www.instagram.com/matiasselaive/"><i className="bi bi-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=974492622"><i className="bi bi-phone"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Maximiliano Diaz</h4>
              <span>Ingeniería Civil Informática, tercer año</span>
              <p>Alguno de mis pasatiempos en estos momentos son:</p>
              <ul>
                <li>
                    Hacer deportes
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-run" width="19" height="19" viewBox="0 0 24 18" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M4 17l5 1l.75 -1.5" />
                        <path d="M15 21l0 -4l-4 -3l1 -6" />
                        <path d="M7 12l0 -3l5 -1l3 3l3 1" />
                    </svg>
                </li>
                <li>
                    Practicar Futbol
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shirt-sport" width="20" height="20" viewBox="0 0 24 19" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                        <path d="M10.5 11h2.5l-1.5 5" />
                    </svg>
                </li>
                <li>
                    Ver liga chilena de futbol
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ball-football" width="19" height="19" viewBox="0 0 24 19" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                        <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
                      </svg>
                </li>
                <li>
                    Dormir
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zzz" width="20" height="20" viewBox="0 0 24 19" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 12h6l-6 8h6" />
                        <path d="M14 4h6l-6 8h6" />
                    </svg>
                </li>
            </ul>

            </div>
            
          </div>

          {/* Team Member 3 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
            {/* Contenido similar al Team Member 1 */}
            <div className="member-img">
              <img src={FotoCarlos} className="img-fluid" alt="" />
              <div className="social">
                <a href="mailto:mselaive@alumnos.uai.cl"><i className="bi bi-envelope"></i></a>
                <a href="https://www.instagram.com/matiasselaive/"><i className="bi bi-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=974492622"><i className="bi bi-phone"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Carlos Serra</h4>
              <span>Ingeniería Civil Informática, tercer año</span>
              <p>Alguno de mis pasatiempos en estos momentos son:</p>
              <ul>
                <li>
                    Ver Series
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv" width="19" height="19" viewBox="0 0 24 18" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M16 3l-4 4l-4 -4" />
                    </svg>
                </li>
                <li>
                    Gimnasio 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-barbell" width="19" height="19" viewBox="0 0 24 13" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M2 12h1" />
                        <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                        <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                        <path d="M9 12h6" />
                        <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                        <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                        <path d="M22 12h-1" />
                    </svg></li>
                <li>
                    Programar
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-visual-studio" width="19" height="19" viewBox="0 0 24 17" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
                    </svg>
                </li>

                <li>
                    Videojuegos
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple-arcade" width="20" height="20" viewBox="0 0 24 19.5" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M20 12.5v4.75a.734 .734 0 0 1 -.055 .325a.704 .704 0 0 1 -.348 .366l-5.462 2.58a5 5 0 0 1 -4.27 0l-5.462 -2.58a.705 .705 0 0 1 -.401 -.691l0 -4.75" />
                        <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a.691 .691 0 0 1 .028 -1.27z" />
                        <path d="M12 7l0 6" />
                    </svg>
                </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
