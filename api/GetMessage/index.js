module.exports = async function (context, req) {
  const date = "2024-02-24T06:10:58.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

