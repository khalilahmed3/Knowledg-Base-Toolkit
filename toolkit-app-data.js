const toolkitApps = [
  {
    "id": "app_listini_e_promozioni",
    "name": "Listini e Promozioni",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "Store Operations",
    "description": "In Listini e Promozioni sono presenti tutti i codici sconto (XStore e Customer Order) che gli store SV possono consultare",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_documenti",
    "name": "Documenti",
    "banner": "GV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "In Documenti sono presenti tutti i codici sconto (XStore e Customer Order) che gli store GV possono consultare",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_preventivi",
    "name": "Preventivi",
    "banner": "SV - GV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Abstract",
    "description": "In Preventivi  è  possibile visualizzare, stampare e consultare i preventivi creati in Ciao",
    "management": "HDA -> LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_fiori",
    "name": "Fiori",
    "banner": "GV",
    "credentials": "Utenza SV (SAP)",
    "owner": "BTO\nStore Support",
    "description": "Back Office",
    "management": "HDA ->Sap Security (Problematiche Accesso)\nHDA -> SAP TR  (Problematiche funzionali)",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_order_tracker",
    "name": "Order Tracker",
    "banner": "SV - GV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Team US",
    "description": "In Order Tracker è possibile monitorare lo stato di avanzamento di un ordine trasmesso al Laboratorio",
    "management": "LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_lpa",
    "name": "LPA",
    "banner": "GV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "BTO\nTeam US",
    "description": "LPA è  l'applicativo che permette di modificare, aggiungere tracciature e trasmettere tutti gli ordini che devono essere ordinati dal Laboratorio di SEDICO, nonchè effettuare il controllo una volta ricevuto l'ordine",
    "management": "LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_lookup_tool",
    "name": "Lookup Tool",
    "banner": "SV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Team US",
    "description": "Lookup Tool è l'applicativo che permette di consultare le vendite effettuate dagli store SV prima del passaggio in Ciao!Optical, con il vecchio sistema di cassa Acuitas",
    "management": "HDA -> LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_smartly",
    "name": "SMARTLY",
    "banner": "GV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Team US",
    "description": "Vendite CBR è l'applicativo che permette di consultare le vendite effettuate dagli store GV prima del passaggio in Ciao!Optical, con il vecchio sistema di cassa CBR",
    "management": "HDA -> LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_dashboard",
    "name": "Dashboard",
    "banner": "SV - GV",
    "credentials": "Utenza My Personal Desk",
    "owner": "Business Analytics",
    "description": "Ss",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_reporting",
    "name": "Reporting",
    "banner": "GV",
    "credentials": "Utenza My Personal Desk",
    "owner": "Business Analytics",
    "description": "Report dei negozi per tipologia di ricerca",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_smartly_2",
    "name": "Smartly",
    "banner": "SV - GV",
    "credentials": "138.0.",
    "owner": "Store Operations",
    "description": "Smartly è il portare attraverso il quale Store Operations invia comunicazioni e documentazione utile agli store",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_outlook",
    "name": "Outlook",
    "banner": "SV - GV",
    "credentials": "Mail Negozio",
    "owner": "Local IT",
    "description": "",
    "management": "HDA -> IT LOCAL IT TEAM",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_office_365",
    "name": "Office 365",
    "banner": "SV - GV",
    "credentials": "Mail Negozio",
    "owner": "Local IT",
    "description": "",
    "management": "HDA -> IT LOCAL IT TEAM",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_my_personal_desk",
    "name": "My Personal Desk",
    "banner": "SV - GV",
    "credentials": "Utenza My Personal Desk",
    "owner": "Numero Dedicato\nBTO",
    "description": "My Personal Desk è il sito attraverso il quale ogni associate di negozio effettua la clock in e clock out, inoltre sono presenti i dati anagrafici e di contatto della singola risorsa",
    "management": "Aprire Self Service Password Reset per Active Directory all’indirizzo https://account.luxottica.com/adpassword      e seguire il processo indicato nell'email  con subject \"\" My Personal Desk – Procedura Reset Password\"\"\nHDA -> LUX_CIAO_HD2 (Problematiche di abilitazione)\"",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_customer_connect",
    "name": "Customer Connect",
    "banner": "SV",
    "credentials": "Utenza My Personal Desk",
    "owner": "CRM",
    "description": "Customer Connect è l'app del CRM",
    "management": "Inoltrare il ticket alla coda LUX_CUSTOMER_CONNECT",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_clicpay",
    "name": "Clicpay",
    "banner": "SV - GV",
    "credentials": "Utenze Clicpay",
    "owner": "Store Operations",
    "description": "Metodo pagamento a distanza",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_tab_appoiment",
    "name": "TAB Appoiment",
    "banner": "SV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Store Operations",
    "description": "Tab Appointment è il portale attraverso il quale vengono inseriti gli appuntamenti per le visite",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_smart_portal",
    "name": "Smart Portal",
    "banner": "SV - GV",
    "credentials": "Mail Negozio",
    "owner": "Store Support",
    "description": "Customer Connect è l'app del CRM",
    "management": "Indicare al negozio di inviare una mail  a storesupport@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_gestione_orario_negozio",
    "name": "Gestione Orario Negozio",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Local IT",
    "description": "Gestione Orario Negozio è il portale attraverso il quale vengono inseriti gli orari di apertura e chiusura del negozio",
    "management": "HDA -> IT LOCAL IT TEAM",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_abbonamenti__te",
    "name": "Abbonamenti &TE",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "Team Subscription",
    "description": "Portale abbonamenti mondo &TE",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_taxfree",
    "name": "Taxfree",
    "banner": "SV - GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations\nGBS",
    "description": "Link attraverso il quale è possibile inserire i moduli per il Tax Free",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_findomestic",
    "name": "Findomestic",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations\nGBS",
    "description": "Link attraverso il quale è possibile inserire i moduli per il pagamento rateizzato Findomestic",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_buono_chiaro",
    "name": "Buono Chiaro",
    "banner": "SV - GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations\nLocal IT",
    "description": "Portale per inserire i voucher utilizzati",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it e ITARetailFrontOffice@luxottica.com",
    "sheet": "Elenco Link Toolkit Pagina 1"
  },
  {
    "id": "app_rbm_previmedical_claimnet",
    "name": "RBM Previmedical CLAIMNET",
    "banner": "SV/GV",
    "credentials": "N/D",
    "owner": "",
    "description": "Portale assicurazione RBM Claimnet",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_rbm_previmedical_pluss",
    "name": "RBM Previmedical PLUSS",
    "banner": "SV/GV",
    "credentials": "",
    "owner": "",
    "description": "Portale assicurazione RBM PLUSS",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_my_marsh_2",
    "name": "MY MARSH",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Sviluppo Business",
    "description": "Portale assicurativo MyMarsh",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_blue_assistance",
    "name": "BLUE ASSISTANCE",
    "banner": "SV/GV",
    "credentials": "",
    "owner": "",
    "description": "Portale assicurazione Blue Assistance",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_aon",
    "name": "AON",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "paghe@salmoiraghievigano.it\nStore Operantions",
    "description": "Portale Premi",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_portale_unico_assicurazioni",
    "name": "PORTALE UNICO ASSICURAZIONI",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Sviluppo Business",
    "description": "Portale Assicurazioni - convenzioni",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_amilon___shopping_card",
    "name": "AMILON - SHOPPING CARD",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Marketing",
    "description": "Pagina Amilon per l'utilizzo delle gift card Amilon",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_sito_sv",
    "name": "SITO SV",
    "banner": "SV",
    "credentials": "",
    "owner": "",
    "description": "Sito Ufficiale S&V",
    "management": "",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_my_essilor_luxottica",
    "name": "MY ESSILOR LUXOTTICA",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations",
    "description": "Portale degli ottici indipendenti - creazione ordini. Gestione ordini specifici e digital warranties per resi.",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_leonardo",
    "name": "LEONARDO",
    "banner": "SV/GV",
    "credentials": "Credenziali MyPersonalDesk",
    "owner": "Store Operations",
    "description": "Piattaforma elearning",
    "management": "Indicare al negozio di inviare una mail a support@leonardo.essilorluxottica.com",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_portale_ips",
    "name": "PORTALE IPS",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "execution@salmoiraghievigano.it",
    "description": "Sito IPS per spedizioni",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_dhl_services",
    "name": "DHL SERVICES",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "execution@salmoiraghievigano.it",
    "description": "Sito DHL Express; organizzare spedizione/ritiro",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_creazione_ddt",
    "name": "CREAZIONE DDT",
    "banner": "SV/GV",
    "credentials": "SAP code negozio (sia user name che password)",
    "owner": "execution@salmoiraghievigano.it",
    "description": "Creazione bolle di consegna",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_cofidis___pago_assegno",
    "name": "COFIDIS - PAGO ASSEGNO",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations",
    "description": "Sito Cofidis per pagamenti dilazionati",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_lpms___report_furti",
    "name": "LPMS - REPORT FURTI",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Asset Protection",
    "description": "Report da compilare in caso di furti",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_monitoraggio_stock",
    "name": "MONITORAGGIO STOCK",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Asset Protection",
    "description": "Strumento usato da Asset protection per fare le conte",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_area_fedelta",
    "name": "AREA FEDELTA'",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_fondazione_s_v",
    "name": "FONDAZIONE S&V",
    "banner": "SV",
    "credentials": "",
    "owner": "",
    "description": "Link fondazione",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_pianificazione_visite_oculisti",
    "name": "PIANIFICAZIONE VISITE OCULISTI",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Sviluppo Business",
    "description": "Gestione appuntamenti visite oculistiche in negozio",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_asset_protection",
    "name": "ASSET PROTECTION",
    "banner": "SV/GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Asset Protection",
    "description": "Utilizzato per Audit in negozio",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_zucchetti",
    "name": "ZUCCHETTI",
    "banner": "GV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_mygvstore",
    "name": "MYGVSTORE",
    "banner": "GV",
    "credentials": "TE",
    "owner": "N/D",
    "description": "Non utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_sito_gv",
    "name": "SITO GV",
    "banner": "GV",
    "credentials": "",
    "owner": "",
    "description": "Sito ufficiale GV",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 2"
  },
  {
    "id": "app_tagliando_oculista",
    "name": "Tagliando Oculista",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Sviluppo Business",
    "description": "Gestione Oculisti",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_sicureasy",
    "name": "Sicureasy",
    "banner": "SV - GV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non più utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_visiondirect",
    "name": "Visiondirect",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Execution",
    "description": "Controllo ordini LAC",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_lab_ticket_reprint",
    "name": "Lab Ticket Reprint",
    "banner": "SV - GV",
    "credentials": "N/D",
    "owner": "Team US",
    "description": "Link attraverso il quale è possibile visualizzare ed effettuare la ristampa dei Lab Ticket",
    "management": "HDA -> LUX_CIAO_HD2",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_sms",
    "name": "SMS",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "MKT",
    "description": "Portale per contattare i clienti",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_vidiemme",
    "name": "Vidiemme",
    "banner": "SV - GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "MKT",
    "description": "Per caricare materiali visual o per ordini",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_materiale_prima_applicazione_lac",
    "name": "Materiale prima applicazione LAC",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Prodotto",
    "description": "Portale per prima applicazione LAC",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_dhl_services_2",
    "name": "DHL Services",
    "banner": "GV",
    "credentials": "utenza: mail di negozio\npassword: in autonomia da settare da store",
    "owner": "Execution",
    "description": "Per prese di DHL (solo europa)",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_errebian",
    "name": "Errebian",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Support",
    "description": "Portale per effettuare ordini di cancelleria",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_grand_vision_plus",
    "name": "Grand Vision Plus",
    "banner": "GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Team Subscription",
    "description": "Portale abbonamenti mondo GV Plus",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_tabhearing",
    "name": "TABHearing",
    "banner": "SV - GV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "Store Operations",
    "description": "Presa appuntamenti",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_sorveglianza_e_controllo",
    "name": "Sorveglianza e Controllo",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non più utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_payback",
    "name": "Payback",
    "banner": "GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "MKT\nUtility - Payback",
    "description": "portale per caricare punti payback dei negozi",
    "management": "Assegnare il ticket alla coda Utility_PAYBACK",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_form_crm",
    "name": "Form CRM",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non più utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_modulo_richiesta_bonifici",
    "name": "Modulo Richiesta Bonifici",
    "banner": "GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Store Operations\nGBS",
    "description": "Portale per la richiesta di reso mediante bonifico",
    "management": "Indicare al negozio di inviare una mail a StoreOperation@salmoiraghievigano.it",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_opsysweb",
    "name": "Opsysweb",
    "banner": "SV",
    "credentials": "",
    "owner": "Store Operations\nBTO",
    "description": "Opsysweb è  l'applicativo che permette di aggiungere tracciature e trasmettere tutti gli ordini che devono essere ordinati dal laboratorio ESSILOR",
    "management": "CHIAMARE IL NUMERO DEDICATO 800 959 438",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_gestione_orario_negozio_2",
    "name": "Gestione Orario Negozio",
    "banner": "GV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Local IT",
    "description": "Gestione Orario Negozio è il portale attraverso il quale vengono inseriti gli orari di apertura e chiusura del negozio",
    "management": "HDA -> IT LOCAL IT TEAM",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_password_reset",
    "name": "Password Reset",
    "banner": "SV",
    "credentials": "Utenza SV (Ciao)",
    "owner": "BTO\nTeam US",
    "description": "In Reset Password lo store ha la possibilità di effettuare il reset della password Ciao",
    "management": "DA VERIFICARE",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_rfeyed",
    "name": "RFeyeD",
    "banner": "SV",
    "credentials": "Utenza My Personal Desk",
    "owner": "Store Support",
    "description": "Strumento per fare inventario digitale",
    "management": "DA VERIFICARE",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_reporting_2",
    "name": "Reporting",
    "banner": "SV",
    "credentials": "Utenza My Personal Desk",
    "owner": "Business Analytics",
    "description": "Report dei negozi per tipologia di ricerca",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_lindberg",
    "name": "Lindberg",
    "banner": "SV",
    "credentials": "Credenziali ad Hoc",
    "owner": "Team Prodotto",
    "description": "Portale per effettuare ordini Lindberg",
    "management": "Smart Portal",
    "sheet": "Elenco Link Toolkit Pagina 3"
  },
  {
    "id": "app_sonova_hearing_test",
    "name": "Sonova Hearing Test",
    "banner": "SV",
    "credentials": "N/D",
    "owner": "N/D",
    "description": "Non più utilizzato",
    "management": "N/D",
    "sheet": "Elenco Link Toolkit Pagina 3"
  }
];
