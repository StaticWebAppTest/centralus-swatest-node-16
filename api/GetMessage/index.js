module.exports = async function (context, req) {
  const date = "2024-06-20T18:14:21.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

