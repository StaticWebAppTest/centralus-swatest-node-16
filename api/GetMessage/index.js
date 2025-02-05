module.exports = async function (context, req) {
  const date = "2025-02-05T14:10:55.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

