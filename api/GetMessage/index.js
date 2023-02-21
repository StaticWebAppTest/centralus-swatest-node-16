module.exports = async function (context, req) {
  const date = "2023-02-21T22:09:49.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

