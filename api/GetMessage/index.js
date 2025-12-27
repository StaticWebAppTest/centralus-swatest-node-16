module.exports = async function (context, req) {
  const date = "2025-12-27T21:11:54.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

