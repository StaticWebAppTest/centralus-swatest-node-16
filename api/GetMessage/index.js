module.exports = async function (context, req) {
  const date = "2024-06-06T03:11:59.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

