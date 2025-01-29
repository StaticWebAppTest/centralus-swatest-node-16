module.exports = async function (context, req) {
  const date = "2025-01-29T06:16:23.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

