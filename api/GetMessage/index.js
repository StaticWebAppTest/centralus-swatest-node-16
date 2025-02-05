module.exports = async function (context, req) {
  const date = "2025-02-05T12:22:27.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

