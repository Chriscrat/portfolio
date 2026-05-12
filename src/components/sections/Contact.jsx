import './contact.scss';
import { useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Turnstile } from '@marsidev/react-turnstile';

import BentoCard from '../BentoCard';
import CyberpunkCard from '../CyberpunkCard';
import socialLinks from '../../data/contact';

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
const inputClass = 'contact-input';

export default function Contact() {
    const { theme } = useTheme();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    // const status = 'sent';
    const [error, setError] = useState('');
    const turnstileRef = useRef(null);
    const [turnstileToken, setTurnstileToken] = useState('');

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!turnstileToken) {
            setError('Veuillez compléter la vérification CAPTCHA.');
            return;
        }
        setError('');
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, turnstileToken }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error ?? "Erreur lors de l'envoi.");
            }

            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
            setTurnstileToken('');
            turnstileRef.current?.reset();

            confetti({ particleCount: 200, spread: 60 });
        } catch (err) {
            setError(err.message);
            setStatus('idle');
            turnstileRef.current?.reset();
            setTurnstileToken('');
        }
    };

    return (
        <section
            id="contact"
            className={[theme === 'dark' ? 'bg-secondary-950' : 'bg-primary-800'].join(' ')}
        >
            <div className={['cyber-grid', theme === 'dark' ? 'bg-secondary-950' : 'bg-primary-700 light-grid'].join(' ')}></div>
            <div className="min-h-screen flex flex-col justify-between pt-[100px] pb-[50px] px-6 max-[560px]:py-20 max-[560px]:px-4">
                <h1 className="text-4xl pb-12 xl:left-32 text-white mb-6 relative">
                    &lt;
                    <span className="text-accent-500">Contact</span>
                    &gt;
                </h1>
                <div className="max-w-content mx-auto text-accent-500">
                    <div className="mb-12">
                        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-[-1px] mb-3">Travaillons ensemble</h2>
                        <p className="text-base leading-relaxed">
                            Une mission, un projet, une question ? Je lis tous les messages et réponds sous 48h.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_450px_1fr] gap-4 items-start">
                        <div className="md:col-span-1">
                            <CyberpunkCard />
                        </div>
                        {/* Form card */}
                        <BentoCard className="!p-9 contact-form-container md:col-span-1">
                            {status === 'sent' ? (
                                <div className="flex flex-col items-center text-center gap-3 py-10">
                                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] text-primary-400">
                                        <CheckCircle size={28} />
                                    </span>
                                    <p className="text-xl font-bold text-tx">Message envoyé !</p>
                                    <p className="text-sm text-tx-muted">Je te recontacte rapidement.</p>
                                    <button
                                        className="mt-2 px-5 py-2.5 rounded-full border border-border-hover bg-accent-500 text-white text-[13px] font-[inherit] cursor-pointer hover:bg-border hover:text-tx transition-[background,color] duration-200"
                                        onClick={() => setStatus('idle')}
                                    >
                                        Envoyer un autre message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    className="flex flex-col gap-5"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-[13px] font-medium text-white"
                                                htmlFor="name"
                                            >
                                                Nom
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className={inputClass}
                                                placeholder="Votre nom"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-[13px] font-medium  text-white"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className={inputClass}
                                                placeholder="votre@email.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-[13px] font-medium text-white"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={inputClass}
                                            placeholder="Dites-moi tout..."
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <Turnstile
                                        ref={turnstileRef}
                                        className="flex justify-center"
                                        siteKey={SITE_KEY}
                                        onSuccess={setTurnstileToken}
                                        onExpire={() => setTurnstileToken('')}
                                        options={{ theme: theme === 'dark' ? 'dark' : 'light' }}
                                    />
                                    {error && (
                                        <div className="flex items-center gap-2 text-sm text-red-400">
                                            <AlertCircle
                                                size={15}
                                                className="shrink-0"
                                            />
                                            {error}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending' || !turnstileToken}
                                        className="px-7 py-3.5 rounded-full bg-primary text-white text-sm font-semibold font-[inherit] cursor-pointer border-none hover:enabled:opacity-85 hover:enabled:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed transition-[opacity,transform] duration-200"
                                    >
                                        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                                    </button>
                                </form>
                            )}
                        </BentoCard>

                        {/* Social links */}
                        <div className="flex flex-col md:col-span-2 lg:col-span-1 md:justify-between gap-3">
                            {socialLinks.map(({ name, handle, href, Icon }) => (
                                <BentoCard
                                    key={name}
                                    href={href}
                                    className={`${theme === 'dark' ? 'bg-accent' : 'bg-gray-900'} !p-5 !px-6 cursor-pointer group text-white`}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <span className={'flex items-center justify-center w-11 h-11 rounded-sm shrink-0'}>
                                            <Icon size={20} />
                                        </span>
                                        <div>
                                            <p className="text-[15px] font-semibold">{name}</p>
                                            <p className="text-[12px] mt-0.5">{handle}</p>
                                        </div>
                                        <ArrowUpRight
                                            size={18}
                                            className="ml-auto shrink-0 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                                        />
                                    </div>
                                </BentoCard>
                            ))}
                        </div>
                    </div>
                </div>
                <h1 className="text-4xl xl:right-32 xl:text-right text-white  mt-6 relative">
                    &lt;/
                    <span className="text-accent-500">Contact</span>
                    &gt;
                </h1>
            </div>
        </section>
    );
}
