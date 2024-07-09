module.exports = async function (context, req) {
  const date = "2024-07-09T13:13:39.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

