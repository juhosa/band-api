const handler = async (event) => {
  let bands = [
    { id: 0, name: "daft punk", genre: "techno", membercount: 2 },
    { id: 1, name: "metallica", genre: "metalli", membercount: 4 },
    { id: 2, name: "kiss", genre: "rock" },
  ];
  try {
    console.log("ASDASDA");
    return {
      statusCode: 200,
      body: JSON.stringify(bands),
      headers: {
        "access-control-allow-origin": "*",
        "content-type": "application/json",
      },
    };
  } catch (error) {
    console.log("erekrkj");
    console.log(error);
    return { statuscode: 500, body: error.toString() };
  }
};

module.exports = { handler };
