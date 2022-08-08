module.exports = async function (context, req) {
  const date = "2022-08-08T03:06:46.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

