module.exports = async function (context, req) {
  const date = "2023-01-20T05:09:16.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

