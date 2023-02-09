module.exports = async function (context, req) {
  const date = "2023-02-09T03:13:49.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

