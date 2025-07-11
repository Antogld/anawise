// src/apps/web/src/utils/errorHandler.ts

/**
 * Interfaccia per gli errori API
 */
export interface ApiError {
  status?: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Mappa i codici di errore HTTP ai messaggi utente-friendly
 */
const ERROR_MESSAGES: Record<number, string> = {
  400: 'Richiesta non valida. Controlla i dati inseriti.',
  401: 'Sessione scaduta o non autorizzata. Effettua nuovamente il login.',
  403: 'Non hai i permessi per eseguire questa azione.',
  404: 'Risorsa non trovata.',
  409: 'Si è verificato un conflitto con lo stato attuale della risorsa.',
  422: 'Dati non validi. Controlla i campi inseriti.',
  429: 'Troppe richieste. Riprova più tardi.',
  500: 'Errore interno del server. Riprova più tardi.',
  502: 'Servizio temporaneamente non disponibile. Riprova più tardi.',
  503: 'Servizio non disponibile. Riprova più tardi.',
  504: 'Timeout della richiesta. Riprova più tardi.'
};

/**
 * Estrae e formatta i messaggi di errore dalle risposte API
 * @param error Errore da axios o altro
 * @returns Oggetto errore formattato
 */
export const handleApiError = (error: any): ApiError => {
  // Errore di rete (nessuna risposta dal server)
  if (!error.response) {
    return {
      message: 'Impossibile connettersi al server. Controlla la tua connessione internet.'
    };
  }

  const { status, data } = error.response;
  
  // Errore con messaggio personalizzato dal server
  if (data?.message) {
    return {
      status,
      message: data.message,
      errors: data.errors
    };
  }
  
  // Errore con messaggio predefinito basato sul codice di stato
  return {
    status,
    message: ERROR_MESSAGES[status] || 'Si è verificato un errore. Riprova più tardi.'
  };
};

/**
 * Formatta gli errori di validazione per i campi del form
 * @param errors Oggetto errori dal server
 * @returns Oggetto con messaggi di errore per campo
 */
export const formatValidationErrors = (errors?: Record<string, string[]>): Record<string, string> => {
  if (!errors) return {};
  
  const formattedErrors: Record<string, string> = {};
  
  Object.entries(errors).forEach(([field, messages]) => {
    formattedErrors[field] = messages[0] || 'Campo non valido';
  });
  
  return formattedErrors;
};

export default {
  handleApiError,
  formatValidationErrors
};
