module.exports = async function (context, req) {
  const date = "2025-11-03T16:16:19.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

