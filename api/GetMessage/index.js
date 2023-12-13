module.exports = async function (context, req) {
  const date = "2023-12-13T13:12:41.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

