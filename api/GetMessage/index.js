module.exports = async function (context, req) {
  const date = "2024-06-06T08:13:13.801Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

