module.exports = async function (context, req) {
  const date = "2023-02-22T03:14:13.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

