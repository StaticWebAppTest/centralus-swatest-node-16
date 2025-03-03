module.exports = async function (context, req) {
  const date = "2025-03-03T18:16:48.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

