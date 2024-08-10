module.exports = async function (context, req) {
  const date = "2024-08-10T11:08:41.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

