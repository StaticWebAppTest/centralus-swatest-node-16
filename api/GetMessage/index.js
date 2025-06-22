module.exports = async function (context, req) {
  const date = "2025-06-22T14:11:57.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

