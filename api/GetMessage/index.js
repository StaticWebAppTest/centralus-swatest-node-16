module.exports = async function (context, req) {
  const date = "2022-04-14T23:10:33.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

