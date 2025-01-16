module.exports = async function (context, req) {
  const date = "2025-01-16T05:11:32.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

