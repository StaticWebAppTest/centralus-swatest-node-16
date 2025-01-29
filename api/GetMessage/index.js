module.exports = async function (context, req) {
  const date = "2025-01-29T12:21:54.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

