module.exports = async function (context, req) {
  const date = "2025-12-22T16:18:01.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

