module.exports = async function (context, req) {
  const date = "2024-08-24T00:50:00.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

