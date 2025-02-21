module.exports = async function (context, req) {
  const date = "2025-02-21T23:12:21.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

