module.exports = async function (context, req) {
  const date = "2025-06-20T05:14:35.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

