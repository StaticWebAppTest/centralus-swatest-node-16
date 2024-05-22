module.exports = async function (context, req) {
  const date = "2024-05-22T01:52:48.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

