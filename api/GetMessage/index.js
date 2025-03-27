module.exports = async function (context, req) {
  const date = "2025-03-27T18:17:26.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

