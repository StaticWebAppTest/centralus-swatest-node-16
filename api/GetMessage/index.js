module.exports = async function (context, req) {
  const date = "2025-06-20T10:14:28.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

