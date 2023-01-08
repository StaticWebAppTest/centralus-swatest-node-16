module.exports = async function (context, req) {
  const date = "2023-01-08T08:11:41.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

