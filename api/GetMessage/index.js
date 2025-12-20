module.exports = async function (context, req) {
  const date = "2025-12-20T05:13:53.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

