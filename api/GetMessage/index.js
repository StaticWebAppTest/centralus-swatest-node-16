module.exports = async function (context, req) {
  const date = "2025-01-21T03:13:10.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

