module.exports = async function (context, req) {
  const date = "2024-11-25T17:11:17.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

