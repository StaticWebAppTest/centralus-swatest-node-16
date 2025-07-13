module.exports = async function (context, req) {
  const date = "2025-07-13T03:27:30.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

