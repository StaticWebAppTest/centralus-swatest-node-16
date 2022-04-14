module.exports = async function (context, req) {
  const date = "2022-04-14T22:11:57.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

