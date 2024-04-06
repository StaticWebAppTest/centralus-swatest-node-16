module.exports = async function (context, req) {
  const date = "2024-04-06T21:08:37.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

