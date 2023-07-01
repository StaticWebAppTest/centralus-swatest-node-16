module.exports = async function (context, req) {
  const date = "2023-07-01T10:09:37.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

