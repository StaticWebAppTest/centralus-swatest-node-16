module.exports = async function (context, req) {
  const date = "2025-04-12T15:11:13.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

