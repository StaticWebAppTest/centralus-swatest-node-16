module.exports = async function (context, req) {
  const date = "2023-09-05T05:08:05.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

