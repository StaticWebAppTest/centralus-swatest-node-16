module.exports = async function (context, req) {
  const date = "2025-07-18T13:32:24.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

