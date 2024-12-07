module.exports = async function (context, req) {
  const date = "2024-12-07T03:28:50.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

