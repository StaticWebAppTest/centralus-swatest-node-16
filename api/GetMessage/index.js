module.exports = async function (context, req) {
  const date = "2025-01-02T00:56:34.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

