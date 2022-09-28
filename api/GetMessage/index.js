module.exports = async function (context, req) {
  const date = "2022-09-28T15:16:53.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

