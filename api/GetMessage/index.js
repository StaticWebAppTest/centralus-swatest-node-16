module.exports = async function (context, req) {
  const date = "2025-05-16T16:16:01.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

