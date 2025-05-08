module.exports = async function (context, req) {
  const date = "2025-05-08T14:12:05.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

