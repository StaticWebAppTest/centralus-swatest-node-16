module.exports = async function (context, req) {
  const date = "2025-09-27T16:13:46.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

