module.exports = async function (context, req) {
  const date = "2022-11-12T19:08:52.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

