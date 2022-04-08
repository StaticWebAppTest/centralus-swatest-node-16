module.exports = async function (context, req) {
  const date = "2022-04-08T02:37:32.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

