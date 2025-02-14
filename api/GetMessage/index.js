module.exports = async function (context, req) {
  const date = "2025-02-14T21:10:25.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

