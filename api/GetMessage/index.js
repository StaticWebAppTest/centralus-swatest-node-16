module.exports = async function (context, req) {
  const date = "2022-04-23T17:12:41.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

