module.exports = async function (context, req) {
  const date = "2022-10-05T04:41:02.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

