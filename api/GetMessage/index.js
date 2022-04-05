module.exports = async function (context, req) {
  const date = "2022-04-05T20:11:32.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

