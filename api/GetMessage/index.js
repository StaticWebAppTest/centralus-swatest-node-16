module.exports = async function (context, req) {
  const date = "2025-03-22T05:11:49.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

