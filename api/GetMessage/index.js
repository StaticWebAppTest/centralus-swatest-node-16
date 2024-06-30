module.exports = async function (context, req) {
  const date = "2024-06-30T03:11:41.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

