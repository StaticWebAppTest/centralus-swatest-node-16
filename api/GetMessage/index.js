module.exports = async function (context, req) {
  const date = "2023-06-26T12:19:30.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

