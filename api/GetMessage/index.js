module.exports = async function (context, req) {
  const date = "2022-04-24T10:11:09.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

