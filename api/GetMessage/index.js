module.exports = async function (context, req) {
  const date = "2022-11-03T12:22:47.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

