export type Status = 'FOUND' | 'MISSING' | 'UNCLEAR' | 'CONFLICT';
export type Requirement = { name: string; value: string; status: Status; note: string; sources: {page: number; quote: string}[] };
export const steps = ['Dokument einlesen', 'Text extrahieren', 'Anforderungen identifizieren', 'KI-Analyse simulieren', 'Quellen validieren', 'Ergebnisse aufbereiten'];
export const samples = [
 {id:'alpha', title:'Projekt ALPHA', subtitle:'Filter-Wasserabscheider', code:'SYN-ALPHA-001', file:'specification-alpha.pdf', pages:[
 ['SYNTHETIC DEMO - NOT FOR ENGINEERING USE','SYN-ALPHA-001 | Revision 01 | Page 1 of 2','Project ALPHA - Filter water separator','1. Scope','Synthetic specification for an aviation fuel filtration vessel.','All names and values are fictional. No customer data.','2. Operating and design requirements','Design pressure: 16 bar(g).','Design temperature: -20 to +60 deg C.','Rated flow rate: 120 m3/h.'],
 ['SYNTHETIC DEMO - NOT FOR ENGINEERING USE','SYN-ALPHA-001 | Revision 01 | Page 2 of 2','3. Construction','Vessel material: stainless steel; grade to be agreed.','Design code: EN 13445.','4. Documentation','Material certificates shall be supplied.','No corrosion allowance is specified in this document.']
 ], requirements:[
 {name:'Design Pressure',value:'16 bar(g)',status:'FOUND',note:'Auslegungsdruck eindeutig angegeben.',sources:[{page:1,quote:'Design pressure: 16 bar(g).'}]},
 {name:'Design Temperature',value:'−20 bis +60 °C',status:'FOUND',note:'Unterer und oberer Auslegungswert vorhanden.',sources:[{page:1,quote:'Design temperature: -20 to +60 deg C.'}]},
 {name:'Flow Rate',value:'120 m³/h',status:'FOUND',note:'Nennvolumenstrom eindeutig angegeben.',sources:[{page:1,quote:'Rated flow rate: 120 m3/h.'}]},
 {name:'Material',value:'Edelstahl · Güte offen',status:'UNCLEAR',note:'Werkstofffamilie vorhanden; konkrete Güte muss bestätigt werden.',sources:[{page:2,quote:'Vessel material: stainless steel; grade to be agreed.'}]},
 {name:'Design Code',value:'EN 13445',status:'FOUND',note:'Auslegungsregelwerk angegeben.',sources:[{page:2,quote:'Design code: EN 13445.'}]},
 {name:'Corrosion Allowance',value:'Nicht spezifiziert',status:'MISSING',note:'Kein numerischer Korrosionszuschlag festgelegt. Gesamtes Dokument geprüft (Seiten 1–2).',sources:[{page:2,quote:'No corrosion allowance is specified in this document.'}]}
 ] as Requirement[]},
 {id:'beta',title:'Projekt BETA',subtitle:'Flugkraftstoff-Filterbehälter',code:'SYN-BETA-002',file:'specification-beta.pdf',pages:[
 ['SYNTHETIC DEMO - NOT FOR ENGINEERING USE','SYN-BETA-002 | Revision 01 | Page 1 of 2','Project BETA - Aviation fuel filter vessel','1. Scope','Fictional training document for specification review.','No real company, customer or project information.','2. Process data sheet','Design pressure: 10 bar(g).','Design temperature: -10 to +50 deg C.','Rated flow rate: 85 m3/h.'],
 ['SYNTHETIC DEMO - NOT FOR ENGINEERING USE','SYN-BETA-002 | Revision 01 | Page 2 of 2','3. Mechanical requirements','Design pressure: 16 bar(g).','Vessel material: EN 1.4404 (316L).','Design code: applicable international standard.','Corrosion allowance: 1 mm.','4. Review note','Resolve discrepancies between process and mechanical data.']
 ],requirements:[
 {name:'Design Pressure',value:'10 / 16 bar(g)',status:'CONFLICT',note:'Prozessdatenblatt und mechanische Anforderungen widersprechen sich. Fachliche Klärung erforderlich.',sources:[{page:1,quote:'Design pressure: 10 bar(g).'}, {page:2,quote:'Design pressure: 16 bar(g).'}]},
 {name:'Design Temperature',value:'−10 bis +50 °C',status:'FOUND',note:'Temperaturbereich eindeutig angegeben.',sources:[{page:1,quote:'Design temperature: -10 to +50 deg C.'}]},
 {name:'Flow Rate',value:'85 m³/h',status:'FOUND',note:'Nennvolumenstrom eindeutig angegeben.',sources:[{page:1,quote:'Rated flow rate: 85 m3/h.'}]},
 {name:'Material',value:'EN 1.4404 (316L)',status:'FOUND',note:'Konkrete Werkstoffgüte vorhanden.',sources:[{page:2,quote:'Vessel material: EN 1.4404 (316L).'}]},
 {name:'Design Code',value:'Regelwerk offen',status:'UNCLEAR',note:'Kein konkretes Regelwerk benannt.',sources:[{page:2,quote:'Design code: applicable international standard.'}]},
 {name:'Corrosion Allowance',value:'1 mm',status:'FOUND',note:'Numerischer Korrosionszuschlag angegeben.',sources:[{page:2,quote:'Corrosion allowance: 1 mm.'}]}
 ] as Requirement[]}
];
export function validatePdf(file: Pick<File,'name'|'size'>) { if (!/\.pdf$/i.test(file.name)) return 'Bitte eine PDF-Datei auswählen.'; if(file.size===0) return 'Die Datei ist leer.'; if(file.size>20*1024*1024) return 'Die Datei darf maximal 20 MB groß sein.'; return ''; }
