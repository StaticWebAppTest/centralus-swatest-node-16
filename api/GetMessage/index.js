module.exports = async function (context, req) {
  const date = "2025-01-20T09:13:04.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

