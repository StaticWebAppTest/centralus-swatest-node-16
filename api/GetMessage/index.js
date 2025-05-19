module.exports = async function (context, req) {
  const date = "2025-05-19T03:13:47.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

