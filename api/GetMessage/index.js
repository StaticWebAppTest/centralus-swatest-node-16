module.exports = async function (context, req) {
  const date = "2023-09-17T20:08:20.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

