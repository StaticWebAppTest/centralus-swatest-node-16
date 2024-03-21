module.exports = async function (context, req) {
  const date = "2024-03-21T12:16:07.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

