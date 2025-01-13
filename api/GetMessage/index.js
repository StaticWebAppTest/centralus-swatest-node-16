module.exports = async function (context, req) {
  const date = "2025-01-13T04:15:11.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

