module.exports = async function (context, req) {
  const date = "2024-02-09T22:08:58.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

