module.exports = async function (context, req) {
  const date = "2022-04-27T23:10:58.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

