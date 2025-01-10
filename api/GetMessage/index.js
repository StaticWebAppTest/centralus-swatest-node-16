module.exports = async function (context, req) {
  const date = "2025-01-10T12:22:54.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

