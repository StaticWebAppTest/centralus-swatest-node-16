module.exports = async function (context, req) {
  const date = "2022-04-13T20:11:53.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

