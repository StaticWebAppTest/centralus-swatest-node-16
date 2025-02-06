module.exports = async function (context, req) {
  const date = "2025-02-06T00:56:51.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

