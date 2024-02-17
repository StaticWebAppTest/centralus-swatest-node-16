module.exports = async function (context, req) {
  const date = "2024-02-17T20:08:34.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

