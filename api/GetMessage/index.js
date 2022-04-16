module.exports = async function (context, req) {
  const date = "2022-04-16T02:21:06.752Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

