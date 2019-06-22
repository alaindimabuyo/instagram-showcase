class instagram {
  async get() {
    const res = await fetch(
      "https://api.instagram.com/v1/users/self/media/recent/?access_token=572689804.f6c0c6a.7450f1a2df6441d08642f355e12b1981"
    );
    const resAlain = await fetch(
      "https://api.instagram.com/v1/users/self/?access_token=572689804.f6c0c6a.7450f1a2df6441d08642f355e12b1981"
    );
    const data = await res.json();
    const dataAlain = await resAlain.json();

    return {
      data,
      dataAlain
    };
  }
}
