module.exports = async function (context, req) {
  const date = "2024-12-22T23:10:48.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

