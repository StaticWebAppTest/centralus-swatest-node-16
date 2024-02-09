module.exports = async function (context, req) {
  const date = "2024-02-09T19:08:05.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

