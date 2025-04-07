module.exports = async function (context, req) {
  const date = "2025-04-07T15:13:23.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

