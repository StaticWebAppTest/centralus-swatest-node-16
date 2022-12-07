module.exports = async function (context, req) {
  const date = "2022-12-07T03:15:53.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

