module.exports = async function (context, req) {
  const date = "2025-04-10T12:25:41.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

