module.exports = async function (context, req) {
  const date = "2025-05-21T09:14:31.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

