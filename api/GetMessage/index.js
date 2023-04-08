module.exports = async function (context, req) {
  const date = "2023-04-08T02:21:32.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

