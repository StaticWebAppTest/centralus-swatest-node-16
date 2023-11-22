module.exports = async function (context, req) {
  const date = "2023-11-22T10:10:49.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

