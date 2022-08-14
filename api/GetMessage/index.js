module.exports = async function (context, req) {
  const date = "2022-08-14T19:08:36.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

