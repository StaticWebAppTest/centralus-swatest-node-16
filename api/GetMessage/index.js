module.exports = async function (context, req) {
  const date = "2025-01-02T17:10:21.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

