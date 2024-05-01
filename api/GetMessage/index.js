module.exports = async function (context, req) {
  const date = "2024-05-01T12:18:26.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

