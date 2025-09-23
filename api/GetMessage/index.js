module.exports = async function (context, req) {
  const date = "2025-09-23T16:16:27.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

