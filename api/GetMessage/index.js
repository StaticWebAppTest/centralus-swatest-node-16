module.exports = async function (context, req) {
  const date = "2024-07-13T21:09:41.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

