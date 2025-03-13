module.exports = async function (context, req) {
  const date = "2025-03-13T15:14:16.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

