module.exports = async function (context, req) {
  const date = "2022-11-25T11:08:58.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

