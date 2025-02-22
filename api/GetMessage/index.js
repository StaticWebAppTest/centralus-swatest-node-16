module.exports = async function (context, req) {
  const date = "2025-02-22T13:14:01.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

