module.exports = async function (context, req) {
  const date = "2025-02-02T13:12:25.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

