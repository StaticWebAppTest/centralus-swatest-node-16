module.exports = async function (context, req) {
  const date = "2022-04-14T16:14:42.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

