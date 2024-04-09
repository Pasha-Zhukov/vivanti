export async function submitFormData(
  formData: Record<string, any>
): Promise<Response> {
  const url = "https://example.com/submit-form";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Ошибка при отправке данных формы:", error);
    throw error;
  }
}
