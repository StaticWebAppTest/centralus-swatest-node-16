module.exports = async function (context, req) {
  const date = "2025-01-21T12:22:36.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

