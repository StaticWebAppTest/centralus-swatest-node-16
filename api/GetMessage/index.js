module.exports = async function (context, req) {
  const date = "2025-03-26T12:24:41.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

