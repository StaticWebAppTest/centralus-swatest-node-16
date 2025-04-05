module.exports = async function (context, req) {
  const date = "2025-04-05T12:21:44.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

