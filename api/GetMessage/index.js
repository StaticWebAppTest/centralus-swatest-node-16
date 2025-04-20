module.exports = async function (context, req) {
  const date = "2025-04-20T19:10:42.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

