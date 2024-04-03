module.exports = async function (context, req) {
  const date = "2024-04-03T03:10:41.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

