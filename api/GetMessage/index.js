module.exports = async function (context, req) {
  const date = "2025-03-25T13:22:49.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

