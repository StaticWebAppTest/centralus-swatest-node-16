module.exports = async function (context, req) {
  const date = "2023-09-01T03:09:13.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

