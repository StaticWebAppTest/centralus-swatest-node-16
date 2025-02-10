module.exports = async function (context, req) {
  const date = "2025-02-10T13:18:58.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

