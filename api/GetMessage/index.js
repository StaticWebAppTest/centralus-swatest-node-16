module.exports = async function (context, req) {
  const date = "2023-07-26T02:06:34.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

