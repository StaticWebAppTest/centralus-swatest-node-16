module.exports = async function (context, req) {
  const date = "2025-05-01T11:10:52.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

