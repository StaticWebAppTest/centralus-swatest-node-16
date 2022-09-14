module.exports = async function (context, req) {
  const date = "2022-09-14T22:12:38.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

