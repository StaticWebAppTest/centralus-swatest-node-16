module.exports = async function (context, req) {
  const date = "2022-04-14T11:09:14.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

