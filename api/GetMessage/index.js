module.exports = async function (context, req) {
  const date = "2025-12-21T13:22:48.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

