module.exports = async function (context, req) {
  const date = "2025-09-01T10:14:54.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

