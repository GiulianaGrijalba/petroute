const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5041";

export type ApiHealth = {
  status: "ok" | "degraded";
  service: string;
  timestampUtc: string;
};

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

export async function getApiHealth(): Promise<ApiHealth> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/v1/health`, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
  } catch {
    throw new ApiError("No se pudo conectar con la API de PetRoute.");
  }

  if (!response.ok) {
    throw new ApiError("La API respondió con un error.", response.status);
  }

  return (await response.json()) as ApiHealth;
}
