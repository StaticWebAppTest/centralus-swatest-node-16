module.exports = async function (context, req) {
  const date = "2025-02-24T15:13:33.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

