module.exports = async function (context, req) {
  const date = "2023-04-06T03:09:16.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

