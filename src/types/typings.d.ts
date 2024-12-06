// typings.d.ts

declare module 'postgres' {
    interface PostgresConnection {
      query(sql: string, params?: any[]): Promise<any[]>;
      // Add more methods and interfaces as needed
    }
  
    function postgres(connectionString: string): PostgresConnection;
  
    export = postgres;
  }
  