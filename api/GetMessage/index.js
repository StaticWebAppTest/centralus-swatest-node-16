module.exports = async function (context, req) {
  const date = "2025-12-02T09:19:49.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

