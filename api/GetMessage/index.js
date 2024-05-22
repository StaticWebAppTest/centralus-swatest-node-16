module.exports = async function (context, req) {
  const date = "2024-05-22T03:12:37.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

