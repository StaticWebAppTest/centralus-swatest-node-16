module.exports = async function (context, req) {
  const date = "2024-06-24T16:12:24.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

