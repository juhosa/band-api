const handler = async (event) => {
  let bands = [
    { id: 0, name: "Daft Punk", genre: "techno", membercount: 2 },
    { id: 1, name: "Metallica", genre: "metalli", membercount: 4 },
    { id: 2, name: "Kiss", genre: "rock" },
  ];
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(bands),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
