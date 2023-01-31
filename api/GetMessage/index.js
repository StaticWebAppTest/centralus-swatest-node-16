module.exports = async function (context, req) {
  const date = "2023-01-31T03:11:58.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

