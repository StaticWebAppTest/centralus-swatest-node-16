module.exports = async function (context, req) {
  const date = "2023-06-22T19:08:08.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

