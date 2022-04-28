module.exports = async function (context, req) {
  const date = "2022-04-28T20:11:35.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

