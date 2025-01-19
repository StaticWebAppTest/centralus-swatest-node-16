module.exports = async function (context, req) {
  const date = "2025-01-19T17:09:18.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

