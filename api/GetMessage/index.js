module.exports = async function (context, req) {
  const date = "2022-07-11T15:10:55.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

