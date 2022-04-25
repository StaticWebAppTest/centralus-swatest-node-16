module.exports = async function (context, req) {
  const date = "2022-04-25T22:10:48.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

