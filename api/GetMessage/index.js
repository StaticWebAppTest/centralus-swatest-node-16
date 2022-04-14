module.exports = async function (context, req) {
  const date = "2022-04-14T15:11:17.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

