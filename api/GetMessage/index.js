module.exports = async function (context, req) {
  const date = "2024-09-17T19:08:53.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

