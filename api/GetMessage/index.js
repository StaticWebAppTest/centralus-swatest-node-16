module.exports = async function (context, req) {
  const date = "2024-04-17T20:09:16.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

