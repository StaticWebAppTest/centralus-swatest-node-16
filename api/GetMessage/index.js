module.exports = async function (context, req) {
  const date = "2025-03-25T03:27:26.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

