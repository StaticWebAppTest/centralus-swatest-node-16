module.exports = async function (context, req) {
  const date = "2025-01-03T12:22:09.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

