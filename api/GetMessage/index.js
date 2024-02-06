module.exports = async function (context, req) {
  const date = "2024-02-06T16:10:49.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

