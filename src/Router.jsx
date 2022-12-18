import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Ensino } from './pages/Ensino'
import { Matriculas } from './pages/Matriculas'
import { Sobre } from './pages/Sobre'
import { Tecnologias } from './pages/Tecnologias'
import { Voluntarios } from './pages/Voluntarios'
import { Contato } from './pages/Contato'
import { VoluntariosSlide } from './pages/VoluntariosSlide'

export function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/ensino' element={<Ensino />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/voluntarios' element={<Voluntarios />} />
            <Route path='/voluntarios/voluntariosslide' element={<VoluntariosSlide />} />
            <Route path ='/tecnologias' element={<Tecnologias />} />
            <Route path ='/contato' element={<Contato />} />
            <Route path ='/matriculas' element={<Matriculas />} />
        </Routes>
        </BrowserRouter>
    )
}