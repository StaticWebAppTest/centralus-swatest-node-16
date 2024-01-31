module.exports = async function (context, req) {
  const date = "2024-01-31T17:08:13.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

