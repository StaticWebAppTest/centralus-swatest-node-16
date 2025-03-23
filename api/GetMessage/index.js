module.exports = async function (context, req) {
  const date = "2025-03-23T02:58:42.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

