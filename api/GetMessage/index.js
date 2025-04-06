module.exports = async function (context, req) {
  const date = "2025-04-06T14:10:41.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

