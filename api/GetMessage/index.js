module.exports = async function (context, req) {
  const date = "2025-02-21T22:11:04.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

