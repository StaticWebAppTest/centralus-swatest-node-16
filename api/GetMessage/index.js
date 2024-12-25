module.exports = async function (context, req) {
  const date = "2024-12-25T16:13:25.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

