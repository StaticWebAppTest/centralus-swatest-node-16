module.exports = async function (context, req) {
  const date = "2022-04-30T14:10:08.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

