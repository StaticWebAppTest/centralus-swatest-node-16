module.exports = async function (context, req) {
  const date = "2025-05-03T22:11:47.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

