module.exports = async function (context, req) {
  const date = "2024-01-02T05:09:14.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

