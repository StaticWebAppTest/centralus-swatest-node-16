module.exports = async function (context, req) {
  const date = "2022-07-05T03:14:59.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

