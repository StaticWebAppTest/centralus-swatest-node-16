module.exports = async function (context, req) {
  const date = "2022-02-28T09:11:01.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

