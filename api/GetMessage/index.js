module.exports = async function (context, req) {
  const date = "2022-04-08T03:30:02.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

