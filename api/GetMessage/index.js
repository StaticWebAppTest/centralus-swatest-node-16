module.exports = async function (context, req) {
  const date = "2024-01-17T22:08:54.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

