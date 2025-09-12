module.exports = async function (context, req) {
  const date = "2025-09-12T10:13:24.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

