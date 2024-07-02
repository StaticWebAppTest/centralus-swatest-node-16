module.exports = async function (context, req) {
  const date = "2024-07-02T02:32:04.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

