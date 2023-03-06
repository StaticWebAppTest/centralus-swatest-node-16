module.exports = async function (context, req) {
  const date = "2023-03-06T03:16:42.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

