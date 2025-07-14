'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      'tu_service_id',
      'tu_template_id',
      form,
      'tu_public_key'
    ).then(() => {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    }).catch((err) => console.error(err))
  }

  return (
    <section id="contact" className="bg-slate-950 text-white px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        ¿Conectamos?
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto text-slate-300 mb-10"
      >
        Si estás interesado en colaborar, hacer consultas o simplemente charlar sobre tecnología y diseño, ¡te invito a escribirme! 👨‍🚀
      </motion.p>

      {/* Redes */}
      <div className="flex justify-center gap-6 text-yellow-400 text-3xl mb-10">
        <a
          href="mailto:tucorreo@ejemplo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/bautistaheyde"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/bautistaheyde"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
          className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Tu email"
          className="w-full bg-slate-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tu mensaje"
          rows={5}
          className="w-full bg-slate-800 text-white p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-slate-950 font-medium py-3 rounded-md hover:bg-yellow-300 transition"
        >
          {sent ? '¡Mensaje enviado!' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  )
}
