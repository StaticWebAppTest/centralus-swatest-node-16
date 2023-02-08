module.exports = async function (context, req) {
  const date = "2023-02-08T10:11:49.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

