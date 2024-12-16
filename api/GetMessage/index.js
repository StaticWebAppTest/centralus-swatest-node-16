module.exports = async function (context, req) {
  const date = "2024-12-16T20:14:03.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

