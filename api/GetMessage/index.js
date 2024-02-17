module.exports = async function (context, req) {
  const date = "2024-02-17T02:14:01.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

