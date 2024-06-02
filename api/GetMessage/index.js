module.exports = async function (context, req) {
  const date = "2024-06-02T22:08:29.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

