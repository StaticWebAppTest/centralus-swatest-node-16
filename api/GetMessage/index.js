module.exports = async function (context, req) {
  const date = "2025-12-22T18:21:25.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

