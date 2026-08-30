-- Initial schema draft (v0)

create table if not exists flights (
  id uuid primary key,
  flight_number text not null,
  origin_icao text not null,
  destination_icao text not null,
  status text not null,
  std timestamptz,
  sta timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists flight_events (
  id uuid primary key,
  flight_id uuid not null references flights(id),
  event_type text not null,
  source text not null,
  occurred_at timestamptz not null,
  recorded_at timestamptz not null default now(),
  metadata jsonb
);

create index if not exists idx_flight_events_flight_id_time on flight_events(flight_id, occurred_at);

create table if not exists flight_tracking_points (
  id bigserial primary key,
  flight_id uuid not null references flights(id),
  latitude numeric(9,6) not null,
  longitude numeric(9,6) not null,
  altitude_ft integer,
  ground_speed_kt integer,
  vertical_speed_fpm integer,
  heading numeric(5,2),
  flight_phase text,
  recorded_at timestamptz not null
);

create index if not exists idx_track_points_flight_time on flight_tracking_points(flight_id, recorded_at);
