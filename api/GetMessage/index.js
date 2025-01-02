module.exports = async function (context, req) {
  const date = "2025-01-02T12:22:11.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

