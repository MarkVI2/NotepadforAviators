declare global {
  namespace NodeJS {
    interface Global {
      flightData: Partial<FlightData>;
    }
  }
}
