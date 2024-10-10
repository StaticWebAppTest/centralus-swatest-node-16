module.exports = async function (context, req) {
  const date = "2024-10-10T09:12:41.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

