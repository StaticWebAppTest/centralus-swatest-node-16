module.exports = async function (context, req) {
  const date = "2024-11-22T16:14:56.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

