module.exports = async function (context, req) {
  const date = "2022-05-31T23:11:47.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

