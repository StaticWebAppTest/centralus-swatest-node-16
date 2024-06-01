module.exports = async function (context, req) {
  const date = "2024-06-01T21:09:54.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

