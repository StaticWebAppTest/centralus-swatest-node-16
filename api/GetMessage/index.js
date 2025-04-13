module.exports = async function (context, req) {
  const date = "2025-04-13T12:22:32.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

