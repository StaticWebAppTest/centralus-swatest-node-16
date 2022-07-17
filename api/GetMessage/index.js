module.exports = async function (context, req) {
  const date = "2022-07-17T04:27:13.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

