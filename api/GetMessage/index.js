module.exports = async function (context, req) {
  const date = "2022-04-08T19:08:45.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

