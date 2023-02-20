module.exports = async function (context, req) {
  const date = "2023-02-20T16:13:16.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

