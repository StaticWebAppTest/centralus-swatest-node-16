module.exports = async function (context, req) {
  const date = "2025-06-09T13:27:24.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

