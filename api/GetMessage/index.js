module.exports = async function (context, req) {
  const date = "2024-02-17T05:08:18.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

