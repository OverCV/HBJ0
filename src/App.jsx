import './App.css'
import img from './assets/owly.png'


function App() {
  return (
    <>
      <div>
        <div className="card">
          <div className="imgBox">
            <div className="bark"></div>
            <img src={img} />
          </div>
          <div className="details">
            <h4 className='color1'>¡Feliz cumpleaños Nete!</h4>
            <h4 className='color2'>Tres de marzo, 2023</h4>
            <p>Para Jorge Iván.</p>
            <p>
              Hoy es un día muy especial y quiero aprovechar esta oportunidad para expresarte mi profundo
              agradecimiento por todo lo que has hecho por mí. A lo largo de los años, has sido un apoyo
              constante y una fuente de inspiración en mi vida. Me has enseñado tanto, y siempre has estado
              ahí para guiarme y apoyarme en todo momento.
            </p>
            <p>
              No puedo expresar lo suficiente lo mucho que valoro tus enseñanzas y consejos. Has sido más que
              un padre, has sido una bendición y un confidente en quien puedo confiar siempre.
            </p>
            <p>
              Gracias por
              dedicar tanto tiempo y esfuerzo a cuidar de mí, y por ayudarme a crecer y madurar como
              persona.En este día de tu cumpleaños, quiero que sepas que eres una parte importante de mi vida
              y que te aprecio más de lo que las palabras pueden expresar. Espero que este día y semana esté
              llena de amor, alegría y mucha felicidad.
            </p>
            <p className="text-right">Que esté muy bien...</p>
            <p className="text-right"><i>♙Nacho.</i></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
