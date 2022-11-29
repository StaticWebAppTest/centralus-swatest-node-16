module.exports = async function (context, req) {
  const date = "2022-11-29T10:10:58.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

