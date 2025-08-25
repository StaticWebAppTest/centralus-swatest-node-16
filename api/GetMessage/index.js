module.exports = async function (context, req) {
  const date = "2025-08-25T16:16:35.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

