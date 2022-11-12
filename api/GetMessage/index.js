module.exports = async function (context, req) {
  const date = "2022-11-12T01:01:41.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

