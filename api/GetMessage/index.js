module.exports = async function (context, req) {
  const date = "2024-01-02T21:08:03.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

