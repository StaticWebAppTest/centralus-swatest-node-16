module.exports = async function (context, req) {
  const date = "2022-05-21T20:11:53.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

