module.exports = async function (context, req) {
  const date = "2025-07-21T12:30:23.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

