module.exports = async function (context, req) {
  const date = "2023-06-21T17:08:02.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

