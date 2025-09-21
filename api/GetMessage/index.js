module.exports = async function (context, req) {
  const date = "2025-09-21T13:17:27.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

