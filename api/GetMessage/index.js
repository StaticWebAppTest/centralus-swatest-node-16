module.exports = async function (context, req) {
  const date = "2023-05-05T20:08:56.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

