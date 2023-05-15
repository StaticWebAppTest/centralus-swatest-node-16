module.exports = async function (context, req) {
  const date = "2023-05-15T20:08:51.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

