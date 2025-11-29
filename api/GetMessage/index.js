module.exports = async function (context, req) {
  const date = "2025-11-29T10:13:24.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

