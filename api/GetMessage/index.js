module.exports = async function (context, req) {
  const date = "2023-03-29T10:10:27.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

