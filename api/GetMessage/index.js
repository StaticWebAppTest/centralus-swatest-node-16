module.exports = async function (context, req) {
  const date = "2025-06-05T16:17:19.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

