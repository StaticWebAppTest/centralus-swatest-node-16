module.exports = async function (context, req) {
  const date = "2025-01-16T10:13:02.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

