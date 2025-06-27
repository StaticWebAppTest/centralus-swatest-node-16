module.exports = async function (context, req) {
  const date = "2025-06-27T16:17:14.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

