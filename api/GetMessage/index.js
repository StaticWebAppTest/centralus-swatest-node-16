module.exports = async function (context, req) {
  const date = "2022-03-01T12:21:38.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

