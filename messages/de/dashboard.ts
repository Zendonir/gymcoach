export const dashboard = {
  activeSession: 'Aktive Einheit',
  sessionFallback: 'Einheit',
  startedOn: '{name} gestartet am {date}',
  resumeSession: 'Einheit fortsetzen',
  noActiveProgram: 'Kein aktives Programm',
  noActiveProgramDescription: 'Aktiviere ein Programm, um eine Einheit zu starten.',
  viewPrograms: 'Programme ansehen',
  emptyProgram: 'Leeres Programm',
  emptyProgramDescription: '{name} hat keine Einheit eingerichtet.',
  configureProgram: 'Programm einrichten',
  startSession: 'Einheit starten',
  activeProgram: 'Aktives Programm: {name}',
  chooseSession: 'Einheit auswählen',
  programSessions: 'Einheiten des Programms',
  insight: {
    deloadTitle: 'Zeit für eine Erholungsphase',
    stalledTitle: '{count, plural, one {Eine Übung stagniert} other {# Übungen stagnieren}}',
    stalledDetail:
      '{count, plural, one {{names} hat sich zuletzt nicht verbessert. Eine kleine Änderung bei Gewicht, Wiederholungen oder Technik kann wieder Bewegung reinbringen.} other {{names} haben sich zuletzt nicht verbessert. Auf der Fortschrittsseite siehst du, was du anpassen kannst.}}',
    prTitle: 'Neuer persönlicher Rekord',
    prWeightDetail: 'In deiner letzten Einheit hast du bei {name} deinen bisher schwersten Satz geschafft. Stark!',
    prOneRmDetail: 'In deiner letzten Einheit hast du bei {name} ein neues geschätztes 1RM erreicht. Stark!',
    consistentTitle: 'Du trainierst regelmäßig',
    consistentDetail:
      'Diese Woche an {count, plural, one {# Tag} other {# Tagen}} trainiert. Bleib dran!',
    deloadStalledReason:
      '{count, plural, one {# Übung stagniert: {names}.} other {# Übungen stagnieren: {names}.}}',
    deloadReadinessReason:
      'Deine Bereitschaft lag bei den letzten {checkins, plural, one {# Check-in} other {# Check-ins}} im Schnitt bei {average}/5.',
  },
};
