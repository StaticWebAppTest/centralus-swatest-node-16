module.exports = async function (context, req) {
  const date = "2024-09-17T22:10:30.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

