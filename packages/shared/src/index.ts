export type EventSource = 'SIMCONNECT' | 'SYSTEM' | 'GROUND_OPS' | 'USER' | 'INTEGRATION';

export type FlightPhase =
  | 'SCHEDULED'
  | 'REPORTING'
  | 'BRIEFING'
  | 'GROUND_PREPARATION'
  | 'BOARDING'
  | 'READY'
  | 'OFF_BLOCK'
  | 'TAXI_OUT'
  | 'TAKEOFF'
  | 'CLIMB'
  | 'CRUISE'
  | 'DESCENT'
  | 'APPROACH'
  | 'LANDING'
  | 'TAXI_IN'
  | 'ON_BLOCK'
  | 'DEBOARDING'
  | 'COMPLETED'
  | 'CLOSED';

export interface FlightEvent {
  eventId: string;
  flightId: string;
  eventType: string;
  source: EventSource;
  timestamp: string;
  metadata?: Record<string, unknown>;
}
