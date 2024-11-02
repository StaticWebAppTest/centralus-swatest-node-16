module.exports = async function (context, req) {
  const date = "2024-11-02T05:11:34.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

