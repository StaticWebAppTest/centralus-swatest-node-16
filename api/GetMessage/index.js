module.exports = async function (context, req) {
  const date = "2025-02-23T18:14:34.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

