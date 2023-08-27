module.exports = async function (context, req) {
  const date = "2023-08-27T19:06:23.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

