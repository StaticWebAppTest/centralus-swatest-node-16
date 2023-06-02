module.exports = async function (context, req) {
  const date = "2023-06-02T08:11:17.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

