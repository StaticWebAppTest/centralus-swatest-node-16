module.exports = async function (context, req) {
  const date = "2025-01-02T13:17:51.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

