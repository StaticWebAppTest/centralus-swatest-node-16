module.exports = async function (context, req) {
  const date = "2023-08-02T02:21:26.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

