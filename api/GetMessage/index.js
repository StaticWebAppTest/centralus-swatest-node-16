module.exports = async function (context, req) {
  const date = "2022-07-17T20:11:00.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

