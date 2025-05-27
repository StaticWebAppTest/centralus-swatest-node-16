module.exports = async function (context, req) {
  const date = "2025-05-27T14:12:51.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

