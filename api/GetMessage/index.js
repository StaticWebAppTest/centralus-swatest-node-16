module.exports = async function (context, req) {
  const date = "2025-01-20T19:09:10.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

