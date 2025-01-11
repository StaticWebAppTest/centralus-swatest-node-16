module.exports = async function (context, req) {
  const date = "2025-01-11T02:15:32.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

