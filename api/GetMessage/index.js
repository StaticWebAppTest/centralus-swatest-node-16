module.exports = async function (context, req) {
  const date = "2024-05-27T20:10:00.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

