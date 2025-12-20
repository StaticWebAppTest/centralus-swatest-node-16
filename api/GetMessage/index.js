module.exports = async function (context, req) {
  const date = "2025-12-20T21:11:29.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

