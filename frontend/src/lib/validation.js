import { z } from 'zod';

const phoneRegex = /^(\+46|0)[0-9\s-]{6,}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Ange minst två tecken')
    .max(80, 'Namnet är för långt'),
  email: z.string().trim().toLowerCase().email('Ogiltig e-postadress'),
  phone: z
    .string()
    .trim()
    .min(6, 'Telefonnumret är för kort')
    .max(20, 'Telefonnumret är för långt')
    .regex(phoneRegex, 'Ange ett svenskt telefonnummer (börja med 0 eller +46)'),
  service: z
    .string()
    .trim()
    .min(1, 'Välj vilken tjänst du är intresserad av'),
  message: z
    .string()
    .trim()
    .min(20, 'Beskriv ditt ärende med minst 20 tecken')
    .max(2000, 'Meddelandet är för långt'),
  honeypot: z
    .string()
    .length(0, 'Otillåten inmatning')
    .optional()
    .or(z.literal(undefined)),
});

export const jobApplicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Ange minst två tecken')
    .max(80, 'Namnet är för långt'),
  email: z.string().trim().toLowerCase().email('Ogiltig e-postadress'),
  phone: z
    .string()
    .trim()
    .min(6, 'Telefonnumret är för kort')
    .max(20, 'Telefonnumret är för långt')
    .regex(phoneRegex, 'Ange ett svenskt telefonnummer (börja med 0 eller +46)'),
  position: z
    .enum(['Plåtslagare', 'Lärling Plåtslagare', 'Annan position'], {
      invalid_type_error: 'Välj en tjänst',
    })
    .default('Plåtslagare'),
  experience: z
    .string()
    .trim()
    .min(1, 'Beskriv din erfarenhet')
    .max(50, 'Förkorta din erfarenhet'),
  message: z
    .string()
    .trim()
    .min(50, 'Berätta lite mer om dig själv (minst 50 tecken)')
    .max(3000, 'Personliga brevet är för långt'),
  honeypot: z
    .string()
    .length(0, 'Otillåten inmatning')
    .optional()
    .or(z.literal(undefined)),
});

export const formDefaultValues = {
  contact: {
    name: '',
    email: '',
    phone: '',
    service: 'Takarbeten',
    message: '',
    honeypot: '',
  },
  job: {
    name: '',
    email: '',
    phone: '',
    position: 'Plåtslagare',
    experience: '',
    message: '',
    honeypot: '',
  },
};
