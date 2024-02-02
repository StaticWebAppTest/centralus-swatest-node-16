module.exports = async function (context, req) {
  const date = "2024-02-02T05:08:48.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

