module.exports = async function (context, req) {
  const date = "2023-07-01T12:17:34.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

