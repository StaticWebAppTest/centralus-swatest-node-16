module.exports = async function (context, req) {
  const date = "2023-08-13T14:06:41.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

