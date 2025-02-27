module.exports = async function (context, req) {
  const date = "2025-02-27T21:11:34.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

