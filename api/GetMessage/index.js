module.exports = async function (context, req) {
  const date = "2024-03-17T20:08:58.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

