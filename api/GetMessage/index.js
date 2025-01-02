module.exports = async function (context, req) {
  const date = "2025-01-02T19:08:47.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

