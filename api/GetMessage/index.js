module.exports = async function (context, req) {
  const date = "2025-03-01T13:15:22.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

