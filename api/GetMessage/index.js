module.exports = async function (context, req) {
  const date = "2022-10-02T07:16:30.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

