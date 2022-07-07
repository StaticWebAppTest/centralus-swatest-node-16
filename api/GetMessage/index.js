module.exports = async function (context, req) {
  const date = "2022-07-07T03:42:43.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

