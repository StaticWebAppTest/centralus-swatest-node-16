module.exports = async function (context, req) {
  const date = "2025-12-19T12:28:42.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

