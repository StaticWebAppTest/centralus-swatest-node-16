module.exports = async function (context, req) {
  const date = "2022-12-17T20:08:34.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

