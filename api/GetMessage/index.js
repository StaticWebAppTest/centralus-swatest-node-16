module.exports = async function (context, req) {
  const date = "2022-08-14T22:10:43.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

