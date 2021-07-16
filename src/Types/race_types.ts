
export type Race = {
    season?: string;
    round: string;
    url?: string;
    raceName?: string;
    Circuit?: Circuit;
    date?: string;
    time?: string;
    Results: RaceResult[];
}

export type Circuit = {
    circuitId?: string;
    url?: string;
    circuitName?: string;
    Location?: CircuitLocation;
}

export type CircuitLocation = {
    lat?: string;
    long?: string;
    locality?: string;
    country?: string;
}

export type RaceResult = {
    number?: string;
    position: string;
    positionText?: string;
    points?: string;
    Driver?: Driver;
    Constructor?: Constructor;
    grid?: string;
    laps?: string;
    status?: string;
    Time?: RaceTime;
    FastestLap?: FastestLap;
}

export type Driver = {
    driverId?: string;
    permanentNumber?: string;
    code?: string;
    url?: string;
    givenName?: string;
    familyName?: string;
    dateOfBirth?: string;
    nationality?: string;
}

export type Constructor = {
    constructorId?: string;
    url?: string;
    name?: string;
    nationality?: string;
}

export type RaceTime = {
    millis?: string;
    time?: string;
}

export type FastestLap = {
    rank?: string;
    lap?: string;
    Time?: Laptime;
    AverageSpeed?: AverageSpeed;
}

export type Laptime = {
    time?: string;
}

export type AverageSpeed = {
    units?: string;
    speed?: string;
}