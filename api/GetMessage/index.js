module.exports = async function (context, req) {
  const date = "2024-07-05T01:56:49.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

