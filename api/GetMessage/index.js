module.exports = async function (context, req) {
  const date = "2023-02-09T19:07:59.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

