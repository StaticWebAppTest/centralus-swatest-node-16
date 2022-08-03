module.exports = async function (context, req) {
  const date = "2022-08-03T17:14:25.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

