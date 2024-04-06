module.exports = async function (context, req) {
  const date = "2024-04-06T22:07:51.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

