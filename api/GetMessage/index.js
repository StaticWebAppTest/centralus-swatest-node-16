module.exports = async function (context, req) {
  const date = "2025-02-22T12:19:49.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

