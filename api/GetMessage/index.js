module.exports = async function (context, req) {
  const date = "2025-05-21T12:26:49.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

