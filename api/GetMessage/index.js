module.exports = async function (context, req) {
  const date = "2025-06-01T15:12:12.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

