module.exports = async function (context, req) {
  const date = "2024-02-08T02:14:39.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

