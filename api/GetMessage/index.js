module.exports = async function (context, req) {
  const date = "2023-01-01T20:09:37.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

