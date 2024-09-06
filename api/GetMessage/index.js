module.exports = async function (context, req) {
  const date = "2024-09-06T00:53:32.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

