module.exports = async function (context, req) {
  const date = "2024-02-05T03:10:42.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

