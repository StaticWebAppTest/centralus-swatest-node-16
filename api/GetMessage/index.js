module.exports = async function (context, req) {
  const date = "2025-02-05T16:14:34.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

