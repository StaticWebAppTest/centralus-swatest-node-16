module.exports = async function (context, req) {
  const date = "2023-02-19T03:14:29.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

