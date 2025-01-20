module.exports = async function (context, req) {
  const date = "2025-01-20T05:11:57.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

