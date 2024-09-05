module.exports = async function (context, req) {
  const date = "2024-09-05T13:17:41.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

