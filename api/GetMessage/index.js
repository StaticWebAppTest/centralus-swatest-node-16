module.exports = async function (context, req) {
  const date = "2025-01-10T18:15:51.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

