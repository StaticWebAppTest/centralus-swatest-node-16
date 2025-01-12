module.exports = async function (context, req) {
  const date = "2025-01-12T13:14:54.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

