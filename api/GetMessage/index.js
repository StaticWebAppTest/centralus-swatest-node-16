module.exports = async function (context, req) {
  const date = "2025-04-28T10:46:28.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

