module.exports = async function (context, req) {
  const date = "2023-05-01T00:51:16.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

