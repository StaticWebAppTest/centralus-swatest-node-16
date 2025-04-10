module.exports = async function (context, req) {
  const date = "2025-04-10T17:11:46.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

