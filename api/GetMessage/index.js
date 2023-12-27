module.exports = async function (context, req) {
  const date = "2023-12-27T10:09:41.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

