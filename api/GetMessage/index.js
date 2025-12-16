module.exports = async function (context, req) {
  const date = "2025-12-16T10:17:13.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

