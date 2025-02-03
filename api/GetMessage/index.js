module.exports = async function (context, req) {
  const date = "2025-02-03T03:15:17.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

