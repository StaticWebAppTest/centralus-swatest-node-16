module.exports = async function (context, req) {
  const date = "2024-02-22T05:09:06.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

