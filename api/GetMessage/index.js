module.exports = async function (context, req) {
  const date = "2025-05-03T15:11:48.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

