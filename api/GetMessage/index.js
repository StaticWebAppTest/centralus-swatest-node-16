module.exports = async function (context, req) {
  const date = "2022-11-14T22:12:58.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

