module.exports = async function (context, req) {
  const date = "2023-12-27T00:41:51.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

